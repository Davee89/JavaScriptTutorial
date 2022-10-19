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
// ***** NEXT Lesson ******* //
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
// *****?  NEXT VIDEO FUNCTIONS ******* //
// const calcArea = function (radius) {
//    return 3.14 * radius ** 2;
// };
// ! Arrow function //
const calcArea = (radius) => 3.14 * radius ** 2;
const area = calcArea(5);
console.log(area);

const greet = function () {
  return "hello world";
};
const greet2 = () => "hello world";

const bill = function (products, tax) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] + tax;
  }
  return total;
};
const bill2 = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] + tax;
  }
  return total;
};

let people = ["mario", "ted", "ken", "lee"];

people.forEach((fred, friend) => {
  console.log(fred, friend);
});
// ? OBJECTS //
const par2a = document.querySelector("p");
console.log(par2a);

const para2s = document.querySelectorAll("div");
console.log(para2s);

const paras = document.querySelectorAll("p");

paras.forEach((paragraph, index) => {
  if (paragraph.textContent.includes("error")) {
    paragraph.classList.add("error");
  }
  if (paragraph.textContent.includes("succes")) {
    paragraph.classList.add("succes");
  } else {
    console.log(`no class added to paragraph number: ${index}`);
  }
});
