const CATEGORIES = {
  quant: ["Time & Work", "Profit & Loss", "Percentages", "Time & Distance", "Averages", "Simple & Compound Interest"],
  logical: ["Probability", "Permutation & Combination", "Number Series", "Blood Relations"]
};

const QUESTIONS = {

  "Time & Work": {
    category: "quant",
    questions: [
      { q: "A and B together finish a job in 12 days. A alone takes 20 days. How many days does B take alone?", company: "TCS", diff: "easy", hint: "Rate_B = Rate_AB − Rate_A", ans: "Rate A=1/20, Rate AB=1/12. Rate B = 1/12 − 1/20 = 2/60 = 1/30. B takes 30 days." },
      { q: "A can do a piece of work in 15 days, B in 20 days. They work together for 6 days then A leaves. How many more days does B need?", company: "Infosys", diff: "medium", hint: "Find work done in 6 days first, then compute remaining for B alone.", ans: "Work in 6 days = 6(1/15+1/20) = 7/10. Remaining = 3/10. B alone: (3/10)×20 = 6 days." },
      { q: "If 12 men can build a wall in 18 days, how many men are needed to finish it in 8 days?", company: "Wipro", diff: "easy", hint: "Men × Days = constant for same work.", ans: "12 × 18 = x × 8 → x = 27 men." },
      { q: "A is twice as fast as B. Together they finish a task in 14 days. How long does A take alone?", company: "Cognizant", diff: "easy", hint: "If B's rate = x, A's rate = 2x. Together = 3x = 1/14.", ans: "3x = 1/14 → x = 1/42. A's rate = 2/42 = 1/21. A takes 21 days." },
      { q: "A, B, C together finish work in 6 days. A & B together take 10 days. B & C together take 12 days. How long does B alone take?", company: "Accenture", diff: "hard", hint: "Use A+B+C, A+B, and B+C rates to isolate B.", ans: "A+B+C=1/6, A+B=1/10, B+C=1/12. C=1/6−1/10=1/15. A=1/6−1/12=1/12. B=1/6−1/12−1/15=1/60. B alone=60 days." },
      { q: "10 workers finish a project in 20 days. After 5 days, 5 workers leave. How many extra days are needed to finish?", company: "TCS NQT", diff: "medium", hint: "Find remaining work after 5 days, then solve with 5 workers.", ans: "Work done in 5 days = 5/20 = 1/4. Remaining = 3/4. 5 workers take (3/4)×20×(10/5) = 30 days. Extra = 30−15 = 15 days." },
      { q: "A tap fills a tank in 6 hours, another empties it in 8 hours. If both are open, how long to fill the tank?", company: "Infosys", diff: "medium", hint: "Net rate = fill rate − empty rate.", ans: "Net rate = 1/6 − 1/8 = 1/24. Tank fills in 24 hours." },
      { q: "A can complete 1/3 of a work in 5 days. He then calls B and they finish together in 4 days. How long would B alone take?", company: "Wipro", diff: "medium", hint: "Find A's rate, then find what B contributed in 4 days.", ans: "A's rate=1/15/day. In 4 days A does 4/15. Total remaining was 2/3=10/15. B did 6/15 in 4 days. B's rate=6/60=1/10. B takes 10 days." },
      { q: "Pipe A fills a tank in 3 hours, Pipe B fills it in 4 hours, Pipe C empties it in 2 hours. All three open — will the tank ever fill?", company: "Amazon", diff: "hard", hint: "Calculate net rate. If negative, tank empties.", ans: "Net = 1/3+1/4−1/2 = 4/12+3/12−6/12 = 1/12. Positive! Tank fills in 12 hours." },
      { q: "24 men can complete a work in 16 days. 32 women can complete it in 24 days. 16 men and 16 women work together. How many days?", company: "Capgemini", diff: "hard", hint: "Find per-man and per-woman daily rates separately.", ans: "1 man/day = 1/384. 1 woman/day = 1/768. 16 men+16 women = 16/384+16/768 = 1/24+1/48 = 3/48 = 1/16. Together: 16 days." },
      { q: "A does a job in 10 days, B in 15 days. They start together but A leaves 2 days before completion. Total days taken?", company: "TCS", diff: "hard", hint: "Let total days = d. A works (d−2) days, B works d days.", ans: "(d−2)/10 + d/15 = 1 → 3(d−2)+2d=30 → 5d=36 → d=7.2 days." },
      { q: "A machine produces 200 units in 5 hours. A new machine is 25% faster. How long to produce 300 units using only the new machine?", company: "Mindtree", diff: "medium", hint: "Find new machine's rate first.", ans: "Old rate=40 units/hr. New rate=40×1.25=50 units/hr. Time=300/50=6 hours." }
    ]
  },

  "Profit & Loss": {
    category: "quant",
    questions: [
      { q: "A shopkeeper sells an item at ₹560 with a profit of 12%. What was the cost price?", company: "Accenture", diff: "easy", hint: "SP = CP × (1 + profit%/100)", ans: "CP = 560/1.12 = ₹500." },
      { q: "An article is sold at a loss of 10%. If sold for ₹40 more, there would be a gain of 15%. Find the cost price.", company: "TCS NQT", diff: "medium", hint: "0.9×CP + 40 = 1.15×CP", ans: "0.25×CP = 40 → CP = ₹160." },
      { q: "A trader marks goods 30% above CP and gives 10% discount. Find profit percentage.", company: "Cognizant", diff: "medium", hint: "Let CP=100. SP = MP × (1−discount/100)", ans: "MP=130, Discount=13, SP=117. Profit% = 17%." },
      { q: "By selling 12 pens for ₹180, a man loses 10%. How many pens should be sold for ₹270 to gain 12.5%?", company: "Wipro", diff: "hard", hint: "Find CP per pen first, then SP at 12.5% profit, then number of pens.", ans: "SP of 12 pens=180, so SP/pen=15. Loss=10% → CP=15/0.9=50/3. Required SP=50/3×1.125=18.75/pen. Pens for ₹270=270/18.75=14.4≈14 pens." },
      { q: "A sells to B at 10% profit. B sells to C at 20% profit. C pays ₹1320. What did A pay originally?", company: "Infosys", diff: "medium", hint: "Work backwards from C's price.", ans: "B's CP = 1320/1.2 = 1100. A's CP = 1100/1.1 = ₹1000." },
      { q: "Two articles sold at ₹990 each — one at 10% profit, one at 10% loss. Overall profit or loss?", company: "TCS", diff: "medium", hint: "There is always a loss in this case. Loss% = (common%)²/100", ans: "Loss% = 10²/100 = 1%. Total SP = 1980. CP1 = 900, CP2 = 1100. Total CP = 2000. Loss = ₹20." },
      { q: "A fruit seller buys oranges at 5 for ₹10 and sells at 4 for ₹10. Profit or loss percentage?", company: "Capgemini", diff: "easy", hint: "Find CP and SP per orange.", ans: "CP/orange = 2. SP/orange = 2.5. Profit = 0.5/2 = 25%." },
      { q: "A shopkeeper gives 3 articles free on purchase of every 12. Find the effective discount percentage.", company: "Amazon", diff: "medium", hint: "Customer pays for 12, gets 15. Discount on 3 items out of 15.", ans: "Pays for 12, gets 15. Discount = 3/15 = 20%." },
      { q: "If CP of 10 articles = SP of 8 articles, find the profit or loss percentage.", company: "Wipro", diff: "medium", hint: "Set CP per article = 1. Find SP.", ans: "CP of 10 = SP of 8. If CP=1/article, total CP=10. SP/article=10/8=1.25. Profit% = 0.25/1 = 25%." },
      { q: "A man buys a watch for ₹1400 and sells it at a loss of 15%. At what price should he sell to get 10% profit?", company: "Infosys", diff: "easy", hint: "Find the required SP for 10% profit directly from CP.", ans: "Required SP = 1400 × 1.10 = ₹1540." },
      { q: "Successive discounts of 20% and 10% are given on an article. Find the single equivalent discount.", company: "TCS", diff: "medium", hint: "Equivalent = 100 − (80×90)/100", ans: "Effective% = 100 − 72 = 28% single discount." },
      { q: "A dealer sells a car at 5% loss. Had he sold it for ₹10,000 more, he would have gained 5%. Find the CP.", company: "Cognizant", diff: "medium", hint: "Difference between 5% gain and 5% loss = 10% of CP.", ans: "10% of CP = 10000 → CP = ₹1,00,000." }
    ]
  },

  "Percentages": {
    category: "quant",
    questions: [
      { q: "A student scores 72% in an exam. If the maximum marks are 800, how many marks did the student score?", company: "Wipro", diff: "easy", hint: "Marks = percentage/100 × total", ans: "0.72 × 800 = 576 marks." },
      { q: "A price increases by 20% then decreases by 20%. What is the net percentage change?", company: "TCS", diff: "medium", hint: "Apply changes to 100 successively.", ans: "100 → 120 → 96. Net = −4%. A 4% decrease." },
      { q: "In an election, candidate A gets 55% of valid votes and wins by 900 votes. Find total valid votes.", company: "Infosys", diff: "medium", hint: "Winning margin = (55−45)% of total.", ans: "10% of total = 900 → Total = 9000 votes." },
      { q: "The population of a town increases 10% annually. Present population is 10,000. What will it be after 2 years?", company: "Accenture", diff: "easy", hint: "Use compound growth: P × (1+r)^n", ans: "10000 × 1.1 × 1.1 = 12,100." },
      { q: "If 30% of A = 0.25 of B, what is A:B?", company: "Cognizant", diff: "medium", hint: "Write as equation and simplify.", ans: "0.3A = 0.25B → A/B = 0.25/0.3 = 5/6. A:B = 5:6." },
      { q: "A's salary is 20% more than B's. By what percentage is B's salary less than A's?", company: "TCS NQT", diff: "medium", hint: "If A = 120, B = 100. % less = (20/120)×100", ans: "(20/120) × 100 = 16.67%. B is 16.67% less than A." },
      { q: "In a class, 40% are girls. 30% of girls and 45% of boys play sports. What % of total students play sports?", company: "Wipro", diff: "hard", hint: "Weighted average: 0.4×30 + 0.6×45", ans: "0.4×30 + 0.6×45 = 12+27 = 39% of total." },
      { q: "The price of sugar rises by 25%. By how much % must a household reduce consumption to keep expenditure the same?", company: "Amazon", diff: "medium", hint: "Reduction% = increase/(100+increase) × 100", ans: "25/125 × 100 = 20% reduction." },
      { q: "A number is first increased by 10% then decreased by 10%. The final number is what % of the original?", company: "Infosys", diff: "easy", hint: "1.1 × 0.9 = ?", ans: "1.1 × 0.9 = 0.99. Final = 99% of original." },
      { q: "In a mixture of 60 litres, water is 25%. How much water must be added to make water 50%?", company: "Capgemini", diff: "medium", hint: "Keep amount of non-water constant.", ans: "Water=15L, Milk=45L. To make water 50%: 45 must also be 50% → total=90L. Add 90−60=30L water." },
      { q: "Two numbers are 20% and 50% more than a third number. What % is the first of the second?", company: "TCS", diff: "medium", hint: "Express both in terms of the third number.", ans: "Let third = 100. First=120, Second=150. First as % of second = 120/150×100 = 80%." },
      { q: "A shopkeeper increases price by 30% and then offers a discount of 30%. What is the net change?", company: "Cognizant", diff: "medium", hint: "Net = 1.3 × 0.7 − 1 expressed as %", ans: "1.3 × 0.7 = 0.91. Net change = −9%. Loss of 9%." }
    ]
  },

  "Time & Distance": {
    category: "quant",
    questions: [
      { q: "A train 200m long passes a pole in 10 seconds. What is the train's speed in km/h?", company: "TCS", diff: "easy", hint: "Speed = Distance/Time. Convert m/s to km/h by ×(18/5).", ans: "Speed = 200/10 = 20 m/s = 72 km/h." },
      { q: "Two trains 150m and 200m move in opposite directions at 60 and 90 km/h. How long to cross each other?", company: "Cognizant", diff: "medium", hint: "Relative speed when opposite = sum. Total distance = sum of lengths.", ans: "Total=350m. Relative speed=150 km/h=125/3 m/s. Time=350÷(125/3)=8.4 seconds." },
      { q: "A person covers a distance in 1 hr at 60 km/h. How fast to cover same distance in 40 minutes?", company: "Accenture", diff: "easy", hint: "Distance is fixed. Find new speed.", ans: "Distance=60km. Time=2/3 hr. Speed=60÷(2/3)=90 km/h." },
      { q: "A man walks at 5 km/h and reaches 10 minutes late. If he walks at 6 km/h he reaches 5 minutes early. Find the distance.", company: "Infosys", diff: "hard", hint: "Time difference = 15 minutes = 1/4 hour. Use d/5 − d/6 = 1/4.", ans: "d/5 − d/6 = 15/60 = 1/4 → d/30 = 1/4 → d = 7.5 km." },
      { q: "A car covers 300 km in 5 hours. It covers first 200 km at 60 km/h. Find speed for the remaining distance.", company: "Wipro", diff: "medium", hint: "Find time used for first 200km, then time left.", ans: "Time for 200km=200/60=10/3 hr. Remaining time=5−10/3=5/3 hr. Speed=100÷(5/3)=60 km/h." },
      { q: "Two cyclists start from same point in opposite directions at 20 and 25 km/h. When will they be 135 km apart?", company: "TCS NQT", diff: "easy", hint: "Distance = relative speed × time", ans: "Relative speed=45 km/h. Time=135/45=3 hours." },
      { q: "A boat travels 30 km upstream in 6 hours and 30 km downstream in 3 hours. Find speed of stream.", company: "Amazon", diff: "medium", hint: "Upstream speed = boat − stream. Downstream = boat + stream.", ans: "Upstream=5, Downstream=10. Stream=(10−5)/2=2.5 km/h." },
      { q: "A 300m long train crosses a 200m bridge in 25 seconds. Find speed of train in km/h.", company: "Wipro", diff: "easy", hint: "Total distance = train length + bridge length.", ans: "Distance=500m, Time=25s. Speed=20m/s=72 km/h." },
      { q: "Two stations A and B are 400 km apart. Train from A goes at 80 km/h, train from B goes at 70 km/h towards each other. When and where do they meet?", company: "Cognizant", diff: "medium", hint: "They approach at combined speed. Find time, then distance from A.", ans: "Combined speed=150 km/h. Time=400/150=8/3 hr. Distance from A=80×8/3=213.3 km." },
      { q: "A thief is spotted running at 10 km/h. A policeman 200m away starts chasing at 12 km/h. In how many minutes will he catch the thief?", company: "Infosys", diff: "medium", hint: "Relative speed = 12−10 = 2 km/h. Distance = 0.2 km.", ans: "Time = 0.2/2 = 0.1 hr = 6 minutes." },
      { q: "A person goes to office at 3/4 of usual speed and is 20 minutes late. What is usual time?", company: "TCS", diff: "medium", hint: "If usual time=T, new time=4T/3. Difference=T/3=20.", ans: "T/3 = 20 → T = 60 minutes." },
      { q: "Sound travels at 330 m/s. Lightning is seen 3 seconds before thunder is heard. How far away is the lightning?", company: "Capgemini", diff: "easy", hint: "Distance = speed × time", ans: "330 × 3 = 990 metres ≈ 1 km." }
    ]
  },

  "Averages": {
    category: "quant",
    questions: [
      { q: "Average of 5 numbers is 20. If one number is removed, average becomes 18. What was the removed number?", company: "Accenture", diff: "easy", hint: "Sum before − Sum after = removed number.", ans: "Sum of 5=100. Sum of 4=72. Removed = 28." },
      { q: "A batsman scores 46 in his 11th innings, increasing his average by 2. Find average after 11 innings.", company: "TCS", diff: "medium", hint: "Let old average = x. 10x + 46 = 11(x+2).", ans: "10x+46=11x+22 → x=24. New average=26." },
      { q: "Average of 10 observations is 15. If 3 is added to each, what is the new average?", company: "Wipro", diff: "easy", hint: "Adding k to each value increases average by k.", ans: "New average = 15+3 = 18." },
      { q: "Average age of a class of 40 students is 15. When teacher joins, average becomes 15.35. Find teacher's age.", company: "Infosys", diff: "medium", hint: "New total = 41 × 15.35. Teacher's age = New total − Old total.", ans: "New total=629.35. Old total=600. Teacher's age=29.35≈30 years." },
      { q: "Average of first 50 natural numbers?", company: "TCS NQT", diff: "easy", hint: "Average = (first + last)/2 for consecutive numbers.", ans: "(1+50)/2 = 25.5" },
      { q: "The average of 3 consecutive even numbers is 18. Find the largest.", company: "Cognizant", diff: "easy", hint: "Let numbers be n−2, n, n+2.", ans: "Middle number = 18. Numbers are 16, 18, 20. Largest = 20." },
      { q: "Average weight of 29 students is 48 kg. Teacher's weight is included and average increases by 500g. Find teacher's weight.", company: "Wipro", diff: "medium", hint: "New average = 48.5 for 30 people.", ans: "Teacher's weight = 30×48.5 − 29×48 = 1455 − 1392 = 63 kg." },
      { q: "Average of 6 numbers is 8. If one number is excluded, average becomes 7.4. Find the excluded number.", company: "Amazon", diff: "easy", hint: "Total − (5 × new average) = excluded number.", ans: "Total=48. Remaining=5×7.4=37. Excluded=48−37=11." },
      { q: "The average of marks of 14 students was 71. If marks of one student were wrongly entered as 42 instead of 56, find the correct average.", company: "Capgemini", diff: "medium", hint: "Correct total = Wrong total + 56 − 42.", ans: "Original total=994. Correct total=994+14=1008. Correct average=1008/14=72." },
      { q: "The average salary of all 60 workers in a factory is ₹12,000. If 40 workers earn ₹10,000 on average, find the average salary of remaining 20.", company: "Infosys", diff: "medium", hint: "Total salary = 60×12000. Subtract 40 workers' total.", ans: "Total=720000. 40 workers=400000. Remaining=320000. Average=320000/20=₹16,000." },
      { q: "Of three numbers, second is twice the first and third is one-third of the first. If the average is 18, find the largest number.", company: "TCS", diff: "medium", hint: "Let first = x. Express all in terms of x.", ans: "x + 2x + x/3 = 54 → 10x/3 = 54 → x = 16.2. Second = 32.4 (largest)." },
      { q: "Average of 20 numbers is 0. At most, how many of them can be greater than zero?", company: "Google", diff: "easy", hint: "Think about the minimum condition to keep sum = 0.", ans: "At most 19 can be positive (if one number is large enough negative to balance all others)." }
    ]
  },

  "Simple & Compound Interest": {
    category: "quant",
    questions: [
      { q: "Find SI on ₹8000 at 5% per annum for 3 years.", company: "TCS", diff: "easy", hint: "SI = P × R × T / 100", ans: "SI = 8000×5×3/100 = ₹1200." },
      { q: "A sum doubles itself in 8 years at SI. Find the rate of interest.", company: "Infosys", diff: "easy", hint: "If sum doubles, SI = P. Use SI = PRT/100.", ans: "P = P×R×8/100 → R = 12.5% per annum." },
      { q: "What is the CI on ₹10,000 at 10% p.a. after 2 years?", company: "Wipro", diff: "medium", hint: "CI = P(1+R/100)^T − P", ans: "CI = 10000×(1.1)²−10000 = 12100−10000 = ₹2100." },
      { q: "SI on a sum for 2 years at 6% is ₹600. Find CI for the same sum, rate, and time.", company: "Cognizant", diff: "medium", hint: "Find P from SI, then compute CI.", ans: "P = 600×100/(6×2) = ₹5000. CI = 5000×(1.06)²−5000 = 5618−5000 = ₹618." },
      { q: "The difference between CI and SI on ₹5000 for 2 years at 4% is?", company: "Accenture", diff: "medium", hint: "Difference = P×(R/100)²", ans: "Difference = 5000×(0.04)² = 5000×0.0016 = ₹8." },
      { q: "A sum of ₹2000 is invested at 10% CI for 3 years. Find the amount.", company: "TCS NQT", diff: "easy", hint: "Amount = P(1+R/100)^T", ans: "2000×(1.1)³ = 2000×1.331 = ₹2662." },
      { q: "At what rate of SI will ₹450 amount to ₹540 in 4 years?", company: "Wipro", diff: "easy", hint: "SI = 540−450 = 90. Use R = SI×100/(P×T).", ans: "R = 90×100/(450×4) = 5% per annum." },
      { q: "A bank offers 10% CI half-yearly. What is the effective annual rate?", company: "Amazon", diff: "hard", hint: "Half-yearly rate = 5%. Effective annual = (1.05)²−1.", ans: "(1.05)²−1 = 1.1025−1 = 10.25% effective annual rate." },
      { q: "₹1600 at CI amounts to ₹1764 in 2 years. Find the rate of interest.", company: "Infosys", diff: "medium", hint: "(1+R/100)² = 1764/1600. Solve for R.", ans: "(1+R/100)² = 1.1025 → 1+R/100 = 1.05 → R = 5% p.a." },
      { q: "Find the time in which ₹3200 amounts to ₹3528 at 5% SI.", company: "Capgemini", diff: "easy", hint: "T = SI×100/(P×R)", ans: "SI = 328. T = 328×100/(3200×5) = 2.05 ≈ 2 years." },
      { q: "If SI for 3 years is ₹1200 and CI for 2 years is ₹860 at same rate, find the principal and rate.", company: "TCS", diff: "hard", hint: "From SI: PR = 40000. From CI difference formula: P(R/100)² = 860 − 2×(1200/3).", ans: "SI/yr=400=PR/100→PR=40000. CI−2×SI_annual=P(R/100)²→860−800=60=P(R/100)². P×(R/100)²=60 and PR=40000→ R/100=60/400=0.15→R=15%. P=40000/15=₹2667." },
      { q: "A person invests ₹10,000 for 2 years partly at 5% SI and rest at 4% SI. Total interest = ₹920. Find amounts at each rate.", company: "Cognizant", diff: "hard", hint: "Let amount at 5% = x. Set up equation.", ans: "5x×2/100 + 4(10000−x)×2/100 = 920 → 10x+8(10000−x)=92000 → 2x=12000 → x=6000 at 5%, ₹4000 at 4%." }
    ]
  },

  "Probability": {
    category: "logical",
    questions: [
      { q: "Two fair dice are rolled. What is the probability that the sum is 7?", company: "Amazon", diff: "easy", hint: "List favorable outcomes for sum=7 out of 36 total.", ans: "Favorable: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. P = 6/36 = 1/6." },
      { q: "A bag has 5 red, 3 blue, 2 green balls. Two drawn without replacement. P(both red)?", company: "Microsoft", diff: "medium", hint: "P = (5/10)×(4/9)", ans: "P = 5/10 × 4/9 = 20/90 = 2/9." },
      { q: "P(at least one head) in 3 tosses of fair coin?", company: "TCS", diff: "easy", hint: "Use complement: 1 − P(no heads).", ans: "P(no heads) = (1/2)³ = 1/8. P(at least one) = 7/8." },
      { q: "A card is drawn from a deck of 52. P(king or red card)?", company: "Infosys", diff: "medium", hint: "Use P(A∪B) = P(A)+P(B)−P(A∩B).", ans: "P(king)=4/52, P(red)=26/52, P(red king)=2/52. P = 28/52 = 7/13." },
      { q: "From a group of 5 men and 3 women, a committee of 3 is formed. P(at least 1 woman)?", company: "Wipro", diff: "hard", hint: "Use complement: 1 − P(no women).", ans: "Total = C(8,3) = 56. No women = C(5,3) = 10. P = 1−10/56 = 46/56 = 23/28." },
      { q: "A speaks truth 4/5 times, B speaks truth 3/4 times. P(they contradict each other)?", company: "Cognizant", diff: "hard", hint: "Contradict = A true & B false + A false & B true.", ans: "P = (4/5)(1/4) + (1/5)(3/4) = 4/20 + 3/20 = 7/20." },
      { q: "Two dice are thrown. P(second shows number greater than first)?", company: "TCS NQT", diff: "medium", hint: "Count all (a,b) where b>a out of 36.", ans: "Favorable = 15. P = 15/36 = 5/12." },
      { q: "A bag has 6 white and 4 black balls. Ball drawn is white, not replaced. P(second is also white)?", company: "Accenture", diff: "medium", hint: "After removing one white, how many white and total remain?", ans: "After first white: 5 white out of 9 total. P = 5/9." },
      { q: "3 boys and 2 girls sit in a row randomly. P(girls are never together)?", company: "Amazon", diff: "hard", hint: "Total = 5!. Place girls in non-adjacent positions of boys arrangement.", ans: "Total=120. Girls together: 4!×2!=48. Girls never together=120−48=72. P=72/120=3/5." },
      { q: "What is the probability that a leap year selected at random has 53 Sundays?", company: "Wipro", diff: "medium", hint: "Leap year = 366 days = 52 weeks + 2 extra days. What pairs include Sunday?", ans: "Extra 2 days can be: (Mon,Tue),(Tue,Wed),(Wed,Thu),(Thu,Fri),(Fri,Sat),(Sat,Sun),(Sun,Mon). Pairs with Sunday = 2 out of 7. P = 2/7." },
      { q: "P(birthday of 2 randomly chosen people falls on different days of week)?", company: "Google", diff: "medium", hint: "Person 1 can have any day. Person 2 must differ.", ans: "P = 7/7 × 6/7 = 6/7." },
      { q: "A problem is given to 3 students. Probability of solving = 1/2, 1/3, 1/4 respectively. P(problem is solved)?", company: "TCS", diff: "medium", hint: "P(solved) = 1 − P(none solves).", ans: "P(none) = 1/2×2/3×3/4 = 1/4. P(solved) = 3/4." }
    ]
  },

  "Permutation & Combination": {
    category: "logical",
    questions: [
      { q: "In how many ways can 5 people be arranged in a row?", company: "Wipro", diff: "easy", hint: "This is simply 5 factorial.", ans: "5! = 120 ways." },
      { q: "How many 3-digit numbers can be formed from digits 1,2,3,4,5 with no repetition?", company: "Infosys", diff: "easy", hint: "Fill hundreds, tens, units with decreasing choices.", ans: "5 × 4 × 3 = 60 numbers." },
      { q: "In how many ways can letters of MISSISSIPPI be arranged?", company: "Google", diff: "hard", hint: "Total letters / (factorial of each repeated count)", ans: "11!/(4!×4!×2!) = 34650 ways. (I=4, S=4, P=2)" },
      { q: "In how many ways can a committee of 4 be chosen from 9 people?", company: "TCS", diff: "easy", hint: "Order doesn't matter → Combination.", ans: "C(9,4) = 126 ways." },
      { q: "How many words can be formed from MONDAY so that vowels are never together?", company: "Accenture", diff: "hard", hint: "Total − (vowels together)", ans: "Total=6!=720. Vowels(O,A) together: treat as unit → 5!×2!=240. Answer=720−240=480." },
      { q: "In how many ways can 4 boys and 3 girls sit in a row so that girls always sit together?", company: "Cognizant", diff: "medium", hint: "Treat 3 girls as one unit. Then arrange 5 units × arrangements within girls.", ans: "5!×3! = 120×6 = 720 ways." },
      { q: "How many diagonals does a polygon with 10 sides have?", company: "Wipro", diff: "medium", hint: "Diagonals = C(n,2) − n", ans: "C(10,2)−10 = 45−10 = 35 diagonals." },
      { q: "From 6 men and 4 women, select a committee of 5 with at least 2 women. How many ways?", company: "TCS NQT", diff: "hard", hint: "Cases: exactly 2W, exactly 3W, exactly 4W.", ans: "C(4,2)×C(6,3) + C(4,3)×C(6,2) + C(4,4)×C(6,1) = 6×20+4×15+1×6 = 120+60+6 = 186 ways." },
      { q: "In how many ways can 8 people sit at a circular table?", company: "Amazon", diff: "medium", hint: "Circular permutation = (n−1)!", ans: "(8−1)! = 7! = 5040 ways." },
      { q: "How many 4-digit numbers can be formed using 0,1,2,3 with no repetition and 0 not in the leading position?", company: "Infosys", diff: "medium", hint: "Total 4-digit arrangements minus those starting with 0.", ans: "Total with no repetition=4×3×2×1=24. Starting with 0: fix 0, arrange 1,2,3 = 3!=6. Answer=24−6=18." },
      { q: "A box has 4 red and 6 blue balls. In how many ways can 3 balls be selected so that exactly 2 are red?", company: "TCS", diff: "medium", hint: "Choose 2 from red and 1 from blue.", ans: "C(4,2)×C(6,1) = 6×6 = 36 ways." },
      { q: "Find the number of ways to arrange letters of EXAMINATION.", company: "Capgemini", diff: "hard", hint: "Count repeated letters: A appears 2x, I appears 2x, N appears 2x.", ans: "11!/(2!×2!×2!) = 39916800/8 = 4989600 ways." }
    ]
  },

  "Number Series": {
    category: "logical",
    questions: [
      { q: "Find the next: 2, 6, 12, 20, 30, ?", company: "TCS NQT", diff: "easy", hint: "Differences are 4, 6, 8, 10... Or n(n+1) pattern.", ans: "42. Pattern: n(n+1). So 6×7=42." },
      { q: "Find the missing: 1, 4, 9, 16, ?, 36", company: "Infosys", diff: "easy", hint: "Perfect squares.", ans: "25. Series: 1², 2², 3², 4², 5², 6²." },
      { q: "Find the odd one out: 2, 3, 5, 7, 11, 13, 16, 17", company: "Wipro", diff: "easy", hint: "All should be prime.", ans: "16 (composite: 2⁴). All others are prime." },
      { q: "Next term: 1, 1, 2, 3, 5, 8, 13, ?", company: "Amazon", diff: "easy", hint: "Each term = sum of previous two.", ans: "21. Fibonacci series." },
      { q: "Find missing: 5, 10, 17, 26, ?, 50", company: "TCS", diff: "medium", hint: "Differences: 5, 7, 9, 11... (odd numbers)", ans: "37. Differences: +5,+7,+9,+11,+13. 26+11=37." },
      { q: "Next term: 3, 6, 18, 72, ?", company: "Cognizant", diff: "medium", hint: "Look at ratios between consecutive terms.", ans: "360. Multiply by 2, 3, 4, 5 → 72×5=360." },
      { q: "Find odd one out: 8, 27, 64, 100, 125, 216", company: "Wipro", diff: "medium", hint: "All should follow the same pattern.", ans: "100. All others are perfect cubes (2³,3³,4³,5³,6³). 100 is not a perfect cube." },
      { q: "Find the missing: 2, 5, 11, 23, 47, ?", company: "Infosys", diff: "medium", hint: "Each term = previous×2 + something.", ans: "95. Rule: ×2+1. So 47×2+1=95." },
      { q: "Next term: 0, 7, 26, 63, 124, ?", company: "Accenture", diff: "medium", hint: "Each term = n³ − 1.", ans: "215. Pattern: 1³−1, 2³−1, 3³−1... 6³−1=215." },
      { q: "Series: 144, 121, 100, 81, 64, ?", company: "TCS NQT", diff: "easy", hint: "Descending perfect squares.", ans: "49. Series: 12², 11², 10², 9², 8², 7²=49." },
      { q: "Find missing: 1, 2, 6, 24, 120, ?", company: "Capgemini", diff: "medium", hint: "Factorial series.", ans: "720. Pattern: 1!, 2!, 3!, 4!, 5!, 6!=720." },
      { q: "7, 13, 25, 49, 97, ?", company: "Google", diff: "hard", hint: "Each term = previous×2 − something.", ans: "193. Rule: ×2−1. 97×2−1=193." }
    ]
  },

  "Blood Relations": {
    category: "logical",
    questions: [
      { q: "Pointing to a photograph, a man says 'She is the daughter of my grandfather's only son.' What is his relation to the girl?", company: "TCS", diff: "medium", hint: "My grandfather's only son = my father.", ans: "Grandfather's only son = Father. His daughter = Sister. She is his sister." },
      { q: "A is B's brother. C is A's mother. D is C's father. E is D's mother. How is A related to D?", company: "Infosys", diff: "medium", hint: "Trace: A's mother = C. C's father = D. So A is D's what?", ans: "A's mother is C, C's father is D. So A is D's grandson." },
      { q: "If P is Q's brother, Q is R's sister, R is S's father, how is P related to S?", company: "Wipro", diff: "medium", hint: "Follow the chain step by step.", ans: "Q is R's sister → R is Q's brother/sibling. R is S's father. P is Q's brother → P and Q are siblings → P is also uncle/aunt of S. P is S's uncle." },
      { q: "Introducing a woman, Amit says 'Her mother is the only daughter of my mother.' How is Amit related to the woman?", company: "Cognizant", diff: "medium", hint: "Only daughter of Amit's mother = Amit's sister.", ans: "Only daughter of his mother = Amit's sister. So the woman's mother = Amit's sister. Amit is the woman's maternal uncle." },
      { q: "A+B means A is husband of B. A−B means A is sister of B. A×B means A is son of B. If P×Q+R, how is P related to R?", company: "TCS NQT", diff: "hard", hint: "Decode each symbol from left to right.", ans: "P×Q means P is son of Q. Q+R means Q is husband of R. So Q is R's husband, P is Q's son → P is R's son." },
      { q: "Two mothers and two daughters went to a restaurant but only 3 chairs were occupied. How?", company: "Accenture", diff: "easy", hint: "Think three generations.", ans: "Grandmother, mother (daughter to grandmother), and daughter (daughter to mother). 3 people: one is both mother and daughter." },
      { q: "Ravi's brother's father's wife's daughter is who to Ravi?", company: "Amazon", diff: "medium", hint: "Simplify step by step.", ans: "Ravi's brother's father = Ravi's father. Father's wife = Mother. Mother's daughter = Ravi's sister." },
      { q: "In a family of 6, A and B are a married couple. D is the only son of F who is the brother of A. C is the daughter of B. E is the brother of D. How many male members?", company: "Wipro", diff: "hard", hint: "Map out the family tree carefully.", ans: "A (male) married to B (female). F is A's brother (male). F's son = D (male), E also son of F (male). C is B's daughter (female). Males: A, F, D, E = 4 males." },
      { q: "X says 'Y's mother is the only sister of my sister's son.' How is X related to Y's mother?", company: "Capgemini", diff: "hard", hint: "My sister's son = my nephew. Y's mother = X's nephew's only aunt = X's sister.", ans: "X's sister's son = X's nephew. Nephew's only aunt = X's sister. So Y's mother = X's sister." },
      { q: "If A is the son of B, B is the daughter of C, C is the son of D. How is A related to D?", company: "TCS", diff: "medium", hint: "Trace the chain: A→B→C→D", ans: "A is son of B (B is female). B is daughter of C (C is male). C is son of D. A is B's son → B is C's daughter → C is D's son. A is D's great-grandson." },
      { q: "A man points to a portrait and says 'I have no brother or sister but that man's father is my father's son.' Who is in the portrait?", company: "Infosys", diff: "medium", hint: "No siblings → 'my father's son' = me.", ans: "His father's son = himself (no siblings). So 'that man's father = me'. The portrait is of his son." },
      { q: "P's father is Q's son. M is the father of P and has only one son. How is Q related to M?", company: "Microsoft", diff: "hard", hint: "Work backwards: P's father = M (only son). Q's son = M.", ans: "P's father = M. Q's son = M (since Q's son is P's father). Q is the father of M. Q is M's father → Q is M's parent → Q is M's grandfather would be wrong. Q's son = M → Q is M's father." }
    ]
  }

};
