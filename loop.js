// // let a = 5;
// // while (a < 11) {
// //   console.log(a++);
// // }

// // 1.
// let a = 0;
// while (a < 10) {
//   a++;
//   console.log(1, "Hello");
// }
// // 2.

// let b = 0;
// while (b < 10) {
//   b = b + 1;
//   console.log(2, b);
// }

// //3.
// let c = 0;
// let d = 0;
// while (c < 20) {
//   c = c + 1;
//   d = d + c;
// }
// console.log(3, d);
// //4.
// let e = 0;
// while (e < 30) {
//   e++;
//   console.log(4, e++);
// }
// // 5.
// let f = 4;
// let factorial = 1;
// while (f >= 1) {
//   factorial = factorial * f;
//   f--;
// }
// console.log(5, factorial);
// // 6.
// let numberForTable = 6;
// let initial = 1;
// while (initial <= 10) {
//   initial++;
//   console.log(6, numberForTable, "*", initial, "=", numberForTable * initial);
// }
// // 7.
// let i = 930;
// let reverse = " ";
// let remainder = 0;
// while (i > 0) {
//   remainder = i % 10;
//   reverse = reverse + remainder;
//   i = Math.floor(i / 10);
// }
// console.log(7, reverse);

// //8.
// // let n = 0;
// // while (n <= 10) {
// //   if (n > 1) {
// //     n = n - 1 + (n + 2);
// //   }
// //   n++;
// // }
// console.log(n);
// const fibbo = (n) => {
//   const sequence = [0, 1];
//   let i = 2;
//   let next;

//   while (i <= n) {
//     next = sequence[i - 2] + sequence[i - 1];
//     sequence[i++] = next;
//   }

//   return sequence;
// };

//1.

// let a = 20;
// while (a > 10) {
//   console.log("hello");
//   a = a - 1;
// }
// //2.

// let b = 1;
// while (b <= 10) {
//   console.log(b);
//   b = b + 1;
// }

//3.
//let c = 1;
//let niilber = 0;
//while (c <= 20) {
//  niilber = niilber + c;
//  c = c + 1;
//}
//console.log(niilber);
// // 3b.
// let d = 20;
// let hariu = 0;
// while (d <= 30) {
//   hariu = hariu + d;
//   d = d + 1;
// }
// console.log(hariu);
// bonus exercise
// let a = 0;
// let count = 0;
// while (a < 100) {
//   a = a + 10;
//   if (a < 50) {
//     console.log("Checkpoint! ", a);
//   } else if (a == 50) {
//     console.log("Half way there! ");
//   } else if (a < 100) {
//     console.log("Checkpoint! ", a);
//   } else {
//     console.log("You made it!");
//     console.log("All, done!");
//   }
// }
// // fibo
// let firstNumber = 0;
// let nextNumber = 1;
// let numberOrder = 0;

// while (nextNumber < 1000) {
//   console.log(nextNumber);
//   nextNumber + nextNumber;
// }
// coffee shop punch card
let cupNumber = 0;
while (cupNumber <= 10) {
  if (cupNumber == 10) {
    console.log("Баяр хүргэе! Та үнэгүй кофе авлаа!");
  } else if (cupNumber % 3 == 0) {
    console.log("Танд үнэгүй бялуу бэлэглжу байна");
  } else {
    console.log("Та " + cupNumber + " дахь кофегоо худалдан авлаа");
  }
  cupNumber = cupNumber + 1;
}

// // summing the digits of a number
// let givenNunber = 1956;
// let digits = 0;

// while (givenNunber > 0) {
//   digits += givenNunber % 10;
//   givenNunber = Math.floor(givenNunber / 10);
// }
// console.log(digits);

// // Largest digit
// let givenNunber = 1956;
// let digits = 0;
// let nextDigit = 0;
// while (givenNunber > 0) {
//   nextDigit = givenNunber % 10;

//   if (digits < nextDigit) {
//     digits = nextDigit;
//   }
//   givenNunber = Math.floor(givenNunber / 10);
// }
// console.log(digits);
// traingle
let a = 9;
let pattern = "";
while (a > 0) {
  a = a - 1;

  pattern = pattern + " *";
  console.log(pattern);
}
