let age = 25;
let year = 2019;
// log things to console
console.log(age, year);

age = 30;
console.log(age);
// ! WARNING //
const points = 100;
// * What?

// *************************
const title = "best";
const author = "me";
const likes = 30;

let result = `The ${title} of ${author} is my ${likes}'s!!!`;
console.log(result);

let html = `
 <p>${title}</p>
 <h2>${author}</h2>
 <span>${likes}</span>
`;
console.log(html);
// ***** Next lesson ********** //
let ninja = ["andrew", "mike", "ben"];
// console.log(ninja.length);
let result2 = ninja.join("-");
console.log(result2);
let test = ninja.concat("ken");
console.log(test);
// let test2 = test.push();
// console.log(test);
let test2 = test.pop();
console.log(test2);
console.log(test);
console.log(ninja);
// *********** Next Lesson ********* //
let score = "100";
score = Number(score);
score = String(score);
score = "s";
score = Boolean(score);
console.log(score + 1, typeof score);
// ? NEXT VIDEO -  CONTROL FLOW ? //
let names = ["shaun", "ken", "david", "ash"];
for (let i = 0; i < names.length; i++) {
  let html2 = `<div>${names[i]}</div>`;
  console.log(html2);
}
// * Next Lesson * //
let b = 6;
do {
  console.log("the b is equal to " + b);
  b++;
} while (b < 5);
let c = [5, 20, 10, 0, 70, 100, 20];
for (let i = 0; i < c.length; i++) {
  if (c[i] === 0) {
    console.log("What is that 0 score?");
    continue;
  }

  console.log("Your score is equal to " + c[i]);

  if (c[i] === 100) {
    console.log("You got perfect score");
    break;
  }
}
// ***** NEX Lesson ******* //
let d = "B";
switch (d) {
  case "A":
    console.log("you got an A");
    break;
  case "B":
    console.log("you got an B");
    break;
  case "C":
    console.log("you got an C");
    break;
  case "D":
    console.log("you got an D");
    break;
  case "E":
    console.log("you got an E");
    break;
  default:
    console.log("you got nothing good");
}
