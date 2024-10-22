// my age
const myAge = "33";

// the early years
let earlyYears = 2;

earlyYears *= 10.5;

// Adjusting my age after accounting for early years
let laterYears = (myAge - 2) * 4;

// Dog years accounted for by later years
// laterYears *= 4; *Took out for extra practice*

// My age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// changed my name to all lower case
const myName = "TORI".toLowerCase();

// Combining my name, my age, and my dog years age into a sentence
console.log(
  `My name is ${myName}. I am a ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
