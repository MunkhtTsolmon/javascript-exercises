// favoriteColors гэсэн array үүсгээд 5 дуртай өнгийг оруулна. Дараа нь гурав дахь өнгийг өөрчилж, шинэчилсэн array-ыг хэвлэ.
// levelsCompleted гэсэн array үүсгээд тоглоомын түвшин давсан эсэхээ boolean утгууд оруул. Хамгийн төгсгөлд нь шинээр true гэсэн утга өгч,  шинэчилсэн array-ыг хэвлэ.
// destinations array үүсгээд очихыг хүссэн 5 газрыг бич. Эхний газрыг устгаад шинэчилсэн array-ыг хэвлэ. Дараа нь хамгийн эхэнд нь “New York” гэсэн элемент нэмээд  шинэчилсэн array-ыг хэвлэ.
// ages гэсэн array зарлаад 18, 21, 22, 20, 23, 36, 79, гэсэн утгуудыг оноож тус array-д байгаа бүх тоог 5-аар нэмэгдүүл. шинэчилсэн array-ыг хэвлэ.
// numbers гэсэн array зарлаад 15ш тоо оруул.
// Дээрх array доторх тоонуудын нийлбэрийг ол.
// Дээрх аrray - ийн хамгийн их тоог ол.
// Дээрх аrray - ийн хамгийн бага тоог ол.
// Дээрх аrray - ийн эхэнд дурын 1 тоог нэм.
// Дээрх аrray - ийн төгсгөлд дурын 1 тоог нэм.
// Дээрх array доторх тоонуудын тэгш болон сондгой тоо тус тус хэд байгааг ол.
// Дээрх олсон утгуудаа хэвлэж харуулаарай.

// //1.
// let favoriteColors = ["yellow", "black", "green", "blue", "violet"];
// favoriteColors[2] = "dark green";
// console.log(favoriteColors);
// //2.
// let levelsCompleted = [true, true, true, false];
// levelsCompleted.push(true);
// console.log(levelsCompleted);
// //3.
// let destinations = ["London", "Berlin", "Sydney", "Rio", "Paris"];
// destinations.shift();
// console.log(destinations);
// destinations.unshift("New York");
// console.log(destinations);
// // //4.
// // let ages = [18, 21, 22, 20, 23, 36, 79];
// // for (let i = 0; i < ages.length; i++) {
// //   console.log(ages[i] + 5);
// // }
// // 5.
// let numbers = [67, 21, 22, 20, 24, 36, 43, 56, 66, 34, 55, 34, 32, 98, 100];
// let sum = 0;
// let biggestNum = 0;
// let smallestNum = numbers[0];
// let oddNumber = [];
// let evenNumber = [];
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
//   if (numbers[i] > biggestNum) {
//     biggestNum = numbers[i];
//   }
//   if (numbers[i] < smallestNum) {
//     smallestNum = numbers[i];
//   }
//   if (numbers[i] % 2 == 0) {
//     evenNumber.push(numbers[i]);
//   } else {
//     oddNumber.push(numbers[i]);
//   }
// }
// console.log(sum);
// console.log(biggestNum);
// console.log(smallestNum);
// numbers.unshift(2);
// numbers.push(8);
// console.log(numbers);
// console.log("even", evenNumber.length);
// console.log("odd", oddNumber.length);

// star
// let star = "";
// let n = 5;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     star += "* ";
//   }
//   star += "\n";
// }
// console.log(star);

// let a = 5;
// let pattern = "";
// while (a > 0) {
//   a = a - 1;

//   pattern = pattern + " *";
//   console.log(pattern);
// }

let star = "";
let n = 5;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    star += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    star += "* ";
  }
  star += "\n";
}
console.log(star);
