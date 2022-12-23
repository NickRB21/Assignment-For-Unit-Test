const bmiResult  = require ("./bmi-calculator");

test  ("Check  what is the correct BMI: ", ()  => {
 expect(bmiResult.bmiCalculator(50, 1.70)).toBe(17.301038062283737);

});

