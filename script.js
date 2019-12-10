var nameMark, nameJohn, markWeight, johnWeight, markHeight, johnHeight, bmiJohn, bmiMark, greaterBmi;
nameMark = "Mark";
nameJohn="John";
markWeight=85;
johnWeight=77;
markHeight=1.84;
johnHeight=1.69;

bmiJohn = johnWeight / (johnHeight * 2);
bmiMark = markWeight / (markHeight * 2);
console.log("The BMI of " + nameJohn + " is: " + bmiJohn);
console.log("The BMI of " + nameMark + " is: " + bmiMark);

greaterBmi = bmiMark >= bmiJohn; 

console.log("Has " + nameMark + " greater BMI from " + nameJohn +  " ?"  + " The answer is: " + greaterBmi);
