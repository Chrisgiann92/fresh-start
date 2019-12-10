/*var nameMark, nameJohn, markWeight, johnWeight, markHeight, johnHeight, bmiJohn, bmiMark, greaterBmi;
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

if (bmiMark > bmiJohn) {
    console.log("Mark\'s BMI is higher than John\'s")
} else {
    console.log("John\'s BMI is higher than Mark\'s")
}*/

var name, age;
name = "John";
var age = prompt("Enter John\'s age") 

if (age < 13) {
    console.log(name + " is a child!")
}
else if (age > 13 && age < 20) {
    console.log(name + " is a teenager!")
}
else if (age >= 20 && age < 30) {
    console.log(name + " is a young man!")
}
if (age > 100) {
    console.log( " ERROR - Sorry," + name + " is probably dead :P")
}
else if (age > 30 && age <=99) {
    console.log(name + " is an adult!") }