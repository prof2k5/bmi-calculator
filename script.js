let personName = "John Doe";
let weightKg = 90;
let heightM = 1.75;
let heightSquared = heightM ** 2;
let bmi = weightKg/heightSquared;
result = document.getElementById("result");
result.innerHTML = "BMI details in the console as instructed.";

let isUnderweight = false;
let isNormalWeight = false;
let isOverweight = false;
let isHighRisk = false;
if (bmi < 18.5) {
    isUnderweight = true;
}
// Normal Weight: BMI is 18.5 or greater AND less than 25.

if (bmi < 25) {
    isNormalWeight = true;
}
// Create a boolean variable called isOverweight that checks if bmi is greater than or equal to 25.
if (bmi >=25) {
    isOverweight  = true;
}
if(isOverweight || weightKg > 90) {
    isHighRisk = true;
}

console.log("Name: " + personName);
console.log("BMI: " + bmi.toFixed(2));
console.log("Underweight: " + isUnderweight);
console.log("Normal Weight: " + isNormalWeight);
console.log("Overweight: " + isOverweight);
console.log("High Risk Alert: " + isHighRisk);
