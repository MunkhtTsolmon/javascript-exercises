// 21. 3-37 хүртэлх тоонуудаас 5д хуваагддаг тоонуудыг дарааллуулан хэвлэ
// 23. Өгөгдсөн эерэг тооны тэгш цифрүүдийн үржвэрийг олно уу
// Жишээ нь 4019 үед 4 * 0 == 0
// 26. N тоо өгөгдөнө, Хэрэв N тоо тэгш бол 2-т хуваа эсвэл сондгой бол 3 аар үржиж 1 ийг нэм. Дээрх үйлдлийг N нь 1 тэй тэнцүү болох хүртэл хэдэн удаа давтах вэ.
// 27. Өгөгдсөн эерэг тооны тэгш цифрүүдийн үржвэр болон сондгой цифрүүдийн нийлбэрийн зөрүүг олоорой

// // 21.
// let numbers = 3;

// while(numbers <= 37) {
//     if( numbers % 5 == 0) {
//         console.log(numbers);
//     }
//     numbers += 1;
// }
// 23.
let givenNumber = 4218;
let evenNumber = 0;
let sum = 1;
while (givenNumber > 0) {
  evenNumber = givenNumber % 10;
  if (evenNumber % 2 == 0) {
    sum *= evenNumber;
  }
  givenNumber = Math.floor(givenNumber / 10);
}
console.log(sum);

// 26.
let n = 5434;
let counter = 0;
while (n > 1) {
  if (n % 2 !== 0) {
    n = n * 3 + 1;
    n = n / 2;
    console.log(n);
  } else {
    n = n / 2;
    console.log(n);
  }
  counter += 1;
}
console.log(counter);

// // 27.
// let positiveNumber = 1238;
// let remainder = 0;
// let evenDigits = 1;
// let multiple = 1;
// let oddDigits = 0;
// while(positiveNumber > 0) {
//     remainder = positiveNumber % 10;
//     if(remainder % 2 == 0) {
//         evenDigits *= remainder;
//     } else {
//         oddDigits += remainder
//     }
//    positiveNumber = Math.floor(positiveNumber / 10);
// }
// console.log(evenDigits - oddDigits);
