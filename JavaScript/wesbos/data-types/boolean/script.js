let isDrawing = false;
const age = 18;
const ofAge = age > 19;
console.log(ofAge);

function checkAge(age) {
  if (age < 18) {
    return "You are a minor";
  } else if (age >= 18 && age < 60) {
    return "You are an adult";
  } else {
    return "You are a senior";
  }
}

console.log(checkAge());

function canDraw(age, hasParentalConsent) {
  return myAgeage >= 18 || (myAgeage < 18 && hasParentalConsent);
}

const myAge = 17;
const hasParentalConsent = true;
const ageGroup = checkAge(age);
const drawingPermission = canDraw(age, hasParentalConsent);

console.log(ageGroup);
console.log(`Drawing Permission: ${drawingPermission}`);
