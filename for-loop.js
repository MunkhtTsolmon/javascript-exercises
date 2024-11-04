// 1. 10 удаа  "Hello!" гэж хэвлэх
// 2. 1-ээс 10 хүртэлх тоог хэвлэх
// 3. 1-ээс 20 хүртэлх тооны нийлбэр олох
// 4. 1-ээс 20 хүртэлх сондгой тоонуудыг хэвлэх
// 5. Дурын тоо өгөгдөхөд тухайн тооны факториал олох
// 6. Тооны хүрд харуулах програм бич.

// 1.
for (let i = 0; i < 10; i++) {
  console.log("Hello");
}
// 2.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// 3.
for (let i = 1; i <= 20; i++) {
  i = i + 1;
  console.log(i);
}
// 4.
for (let i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
//5.
let fact = 1;
for (let i = 4; i > 0; i--) {
  fact = fact * i;
}
console.log(fact);
//6.
let numToBeMultipled = 4;
for (let multipliers = 1; multipliers < 11; multipliers++) {
  console.log(
    numToBeMultipled +
      " * " +
      multipliers +
      " = " +
      numToBeMultipled * multipliers
  );
}
//7.
let givenNumber = 123;
let reverse = "";
for (givenNumber; givenNumber > 0; givenNumber = Math.floor(givenNumber / 10)) {
  reverse += givenNumber % 10;
}
console.log(reverse);

/**
Create a while loop that runs from 1-100

Every 10 loops, print out: Checkpoint! and the loop number
On loop 50 print out ONLY: Half way there!
On the final loop (100) print out ONLY: You made it!
AFTER the loop is done, print out: All, done!
You should see this printed out when run:
 */

/** PLAN
 *  start: 1
 *  end: 100
 *  conditions: 10 , 50, 100
 *  action: Print
 *
 *  i => 1-100
 *
 */

let i = 1;
for (i = 1; i <= 100; i++) {
  if (i % 100 === 0) {
    console.log("You made it!");
  } else if (i % 50 === 0) {
    console.log("Half way there!");
  } else if (i % 10 === 0) {
    console.log("Checkpoint!", i);
  }
}
console.log("All, done!");

/**
Төсвийн хянагч (Budget Tracker)

Та өдөр тутмын зардлаа хянахыг хүсч байна. Таны төсөв буюу зарцуулах боломжтой мөнгөний хэмжээ $100 байна.

Ажлын өдрүүдэд (Даваа - Баасан) зардал $5 байх болно.
Амралтын өдрүүдэд (Бямба, Ням) зардал $10 байх болно.
Хэрэв  нийт зардал $80-аас илүү, гэхдээ $100-аас бага болвол "Таны нийт зардал 100$ руу ойртож байна шүү" гэж хэвлэ.
Хэрэв  нийт зардал $100 буюу төсвийн хязгаарт хүрсэн бол: "Та зардлын хязгаарт хүрлээ!" гэж хэвлээд давталтыг зогсоо.


budget => 100
day =>
totalExpense => 

 */

const budget = 100;
let day = 1; // 1,2,3,4,5,6,7
let dayExpense;
let totalExpense = 0;
for (
  totalExpense = 0;
  totalExpense <= budget;
  totalExpense = totalExpense + dayExpense
) {
  if (day <= 5) {
    dayExpense = 5;
  } else if (day > 5 && day <= 7) {
    dayExpense = 10;
  }

  if (totalExpense >= 80 && totalExpense <= 100) {
    console.log("Таны нийт зардал 100$ руу ойртож байна шүү");
  } else if (totalExpense > 99) {
    console.log("Та зардлын хязгаарт хүрлээ!");
  }

  day++;

  if (day >= 7) {
    day = 1;
  }
}

console.log(totalExpense);
