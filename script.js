// ── STATE ──
let currentCategory = 'all';
let currentQuestion = null;
let previousQuestion = '';
let timerInterval = null;
let timerSeconds = 60;
let timerRunning = false;
let hintVisible = false;
let answerVisible = false;
let streak = 0;
let audioCtx = null;

// ── AUDIO ──
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTick(freq = 600, duration = 0.04) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch (e) {}
}

function playSpinSound(durationMs) {
  const totalTicks = 28;
  let tickCount = 0;
  const startTime = performance.now();

  function scheduleTick() {
    if (tickCount >= totalTicks) return;
    const progress = tickCount / totalTicks;
    // ease out: ticks slow down towards end
    const delay = 40 + progress * progress * 280;
    const freq = 700 - progress * 300;
    setTimeout(() => {
      playTick(freq, 0.05);
      tickCount++;
      scheduleTick();
    }, delay);
  }
  scheduleTick();
}

function playLandSound() {
  try {
    const ctx = getAudioCtx();
    // cheerful ding ding
    [523, 659, 784].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.12;
      gain.gain.setValueAtTime(0.22, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      osc.start(t);
      osc.stop(t + 0.35);
    });
  } catch (e) {}
}

// ── CATEGORY FILTER ──
function setCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}

function getTopicPool() {
  const allTopics = Object.keys(QUESTIONS);
  if (currentCategory === 'all') return allTopics;
  return allTopics.filter(t => QUESTIONS[t].category === currentCategory);
}

// ── SPIN ──
let isSpinning = false;

function handleSpin() {
  if (isSpinning) return;
  isSpinning = true;

  const btn = document.getElementById('spinBtn');
  btn.disabled = true;
  btn.textContent = 'Spinning...';

  resetTimer();
  hideExtras();

  const topics = getTopicPool();
  if (!topics.length) {
    btn.disabled = false;
    btn.textContent = 'Spin!';
    isSpinning = false;
    return;
  }

  // animate the current question cycling
  const totalDuration = 2800;
  const startTime = performance.now();
  let lastSwap = 0;
  let swapInterval = 80;

  playSpinSound(totalDuration);

  function cycle(now) {
    const elapsed = now - startTime;
    const progress = elapsed / totalDuration;

    // slow down swapping near the end
    const currentInterval = swapInterval + progress * progress * 600;

    if (elapsed - lastSwap > currentInterval) {
      const randomTopic = topics[Math.floor(Math.random() * topics.length)];
      const pool = QUESTIONS[randomTopic].questions;
      const randomQ = pool[Math.floor(Math.random() * pool.length)];
      showCycleQuestion(randomQ.q);
      lastSwap = elapsed;
    }

    if (elapsed < totalDuration) {
      requestAnimationFrame(cycle);
    } else {
      // land on final question
      const finalTopic = topics[Math.floor(Math.random() * topics.length)];
      const finalPool = QUESTIONS[finalTopic].questions;
      const finalQ = finalPool[Math.floor(Math.random() * finalPool.length)];
      currentQuestion = { ...finalQ, topic: finalTopic };

      playLandSound();
      showFinalQuestion();

      btn.disabled = false;
      btn.textContent = 'Spin again!';
      isSpinning = false;
    }
  }

  // show right panel in motion
  document.getElementById('idleBlock').style.display = 'none';
  document.getElementById('liveBlock').style.display = 'flex';

  requestAnimationFrame(cycle);
}

function showCycleQuestion(text) {
  const currQ = document.getElementById('currQ');
  currQ.textContent = text;
  currQ.style.opacity = '0.6';
}

function showFinalQuestion() {
  const currQ = document.getElementById('currQ');
  const prevQ = document.getElementById('prevQ');
  const metaStrip = document.getElementById('metaStrip');
  const nextLabel = document.getElementById('nextLabel');

  // set previous question (faded above divider)
  if (previousQuestion) {
    prevQ.textContent = previousQuestion;
  } else {
    prevQ.textContent = '';
  }

  // set current question (bold, center)
  currQ.textContent = currentQuestion.q;
  currQ.style.opacity = '1';
  currQ.classList.add('slide-up');
  setTimeout(() => currQ.classList.remove('slide-up'), 400);

  // save for next spin
  previousQuestion = currentQuestion.q;

  // topic tag
  document.getElementById('topicTag').textContent = currentQuestion.topic;
  document.getElementById('companyTag').textContent = currentQuestion.company;

  const diffEl = document.getElementById('diffTag');
  diffEl.textContent = currentQuestion.diff;
  diffEl.className = 'diff-tag ' + currentQuestion.diff;

  metaStrip.style.display = 'flex';
  nextLabel.textContent = 'next question';

  // show hint/answer buttons
  document.getElementById('hintBtn').style.display = 'inline-flex';
  document.getElementById('ansBtn').style.display = 'inline-flex';

  // hint & answer content
  document.getElementById('hintText').textContent = currentQuestion.hint;
  document.getElementById('answerText').textContent = currentQuestion.ans;
}

// ── HINT & ANSWER ──
function hideExtras() {
  hintVisible = false;
  answerVisible = false;
  const hintBox = document.getElementById('hintBox');
  const answerBox = document.getElementById('answerBox');
  hintBox.style.display = 'none';
  answerBox.style.display = 'none';
  document.getElementById('hintBtn').textContent = '💡 Hint';
  document.getElementById('ansBtn').textContent = 'See Answer';
}

function toggleHint() {
  hintVisible = !hintVisible;
  document.getElementById('hintBox').style.display = hintVisible ? 'block' : 'none';
  document.getElementById('hintBtn').textContent = hintVisible ? 'Hide Hint' : '💡 Hint';
}

function toggleAnswer() {
  answerVisible = !answerVisible;
  document.getElementById('answerBox').style.display = answerVisible ? 'block' : 'none';
  document.getElementById('ansBtn').textContent = answerVisible ? 'Hide Answer' : 'See Answer';
  if (answerVisible) {
    streak++;
    const streakWrap = document.getElementById('streakWrap');
    document.getElementById('streakNum').textContent = streak;
    streakWrap.style.opacity = '1';
  }
}

// ── TIMER ──
function toggleTimer() {
  if (!currentQuestion) return;

  const timerRow = document.getElementById('timerRow');
  timerRow.style.display = 'flex';

  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById('timerBtn').textContent = 'Resume →';
    document.getElementById('timerBtn').className = 'btn-timer';
  } else {
    if (timerSeconds === 0) resetTimer();
    timerRunning = true;
    document.getElementById('timerBtn').textContent = 'Pause';
    document.getElementById('timerBtn').className = 'btn-timer running';
    timerInterval = setInterval(tick, 1000);
  }
}

function tick() {
  if (timerSeconds > 0) timerSeconds--;

  const num = document.getElementById('timerNum');
  const arc = document.getElementById('timerArc');

  num.textContent = timerSeconds;
  num.className = 'timer-num' + (timerSeconds <= 10 ? ' urgent' : '');

  // arc: dasharray = 125.6, offset goes from 0 to 125.6
  const pct = timerSeconds / 60;
  arc.style.strokeDashoffset = (1 - pct) * 125.6;

  if (timerSeconds <= 10 && timerSeconds > 0) {
    playTick(400 + timerSeconds * 20, 0.06);
  }

  if (timerSeconds === 0) {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById('timerBtn').textContent = "Time's up!";
    document.getElementById('timerBtn').className = 'btn-timer done';
    playLandSound();
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = 60;

  const num = document.getElementById('timerNum');
  const arc = document.getElementById('timerArc');
  const row = document.getElementById('timerRow');

  if (num) { num.textContent = '60'; num.className = 'timer-num'; }
  if (arc) arc.style.strokeDashoffset = 0;
  if (row) row.style.display = 'none';

  document.getElementById('timerBtn').textContent = 'Start Timer →';
  document.getElementById('timerBtn').className = 'btn-timer';
}
