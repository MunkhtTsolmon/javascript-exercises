// var num1 = 15;

// if (num1 % 3 == 0 && num1 % 5 == 0) {
//   console.log("Divided by both");
// } else if (num1 % 5 == 0) {
//   console.log("Divided by 5");
// } else if (num1 % 3 == 0) {
//   console.log("divided by 3");
// } else {
//   console.log("divided by neither");
// }
// // 1.
// const a = 936;
// const dividedNumber = a / 12;
// const remainder = dividedNumber % 9;
// console.log(1, remainder);
// // 2.
// const result = 85;
// if (result < 60) {
//   console.log(2, "F");
// } else if (result < 70) {
//   console.log(2, "D");
// } else if (result < 80) {
//   console.log(2, "C");
// } else if (result < 90) {
//   console.log(2, "B");
// } else {
//   console.log(2, "A");
// }
// // 3.
// let month = "March";
// if (month == "January") {
//   console.log(3, 31);
// } else if (month == "February") {
//   console.log(3, 28);
// } else if (month == "March") {
//   console.log(3, 30);
// } else if (month == "April") {
//   console.log(3, 31);
// } else if (month == "May") {
//   console.log(3, 30);
// } else if (month == "June") {
//   console.log(3, 31);
// } else if (month == "July") {
//   console.log(3, 30);
// } else if (month == "August") {
//   console.log(3, 31);
// } else if (month == "September") {
//   console.log(3, 30);
// } else if (month == "October") {
//   console.log(3, 31);
// } else if (month == "November") {
//   console.log(3, 30);
// } else if (month == "December") {
//   console.log(3, 31);
// }

// // 4.
// const givenNumber = 4;
// if (givenNumber % 2 == 0) {
//   console.log(4, "Even");
// } else {
//   console.log(4, "Odd");
// }
// // 5.
// let givenNumber1 = -2;
// if (givenNumber1 < 0) {
//   console.log(5, "negative");
// } else {
//   console.log(5, "positive");
// }
// 6;
// let numberGiven1 = 45;
// let numberGiven2 = 88;
// let numberGiven3 = 105;
// let numberGiven4 = 101;
// let firstNumber = 0;

// if (numberGiven1 > 80) {
//   firstNumber += numberGiven1;
// }
// if (numberGiven2 > 80) {
//   firstNumber += numberGiven2;
// }
// if (numberGiven3 > 80) {
//   firstNumber += numberGiven3;
// }
// if (numberGiven4 > 80) {
//   firstNumber += numberGiven4;
// }
// console.log(6, firstNumber);

// //7.
// const aa = 2;
// const bb = 5;
// console.log(aa + bb);
// // 8.
// let A = 5;
// let B = 3;
// let diagonal = (A ** 2 + B ** 2) ** 0.5;
// // 9.
// let a = 2152;
// if ((a % 4 == 0 && a % 100 !== 0) || a % 400 == 0) {
//   console.log("Leap year");
// } else {
//   console.log("Not a leap year");
// }
// //10.
// let a = 500;
// let b = 70;
// let c = 800;
// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else if (c > a && c > b) {
//   console.log(c);
// }
// 11.
let a = 8;
let b = 10;
let c = 4;
let d = 20;
let x;
if (a > b && a > c && a > d && a) {
  if (b > c && a) console.log(a, b, c);
  if (c > b) console.log(a, c, b);
  
} else if (b > a && b > c) {
  if (a > c) console.log(b, a, c);
  if (c > a) console.log(b, c, a);
} else if (c > a && c > b) {
  if (a > b) console.log(c, a, b);
  if (b > a) console.log(c, b, a);
}
