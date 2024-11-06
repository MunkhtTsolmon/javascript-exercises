// function calculateProblems(studyHours) {
//   let problemsPerHour = 2;
//   let totalProblems = studyHours * problemsPerHour;
//   console.log(
//     "Би",
//     studyHours,
//     "цаг суралцаад",
//     totalProblems,
//     "бодлого бодлоо."
//   );
// }
// calculateProblems(2);

// function printFavoriteFood(name, food) {
//   console.log(name, "loves to eat", food);
// }
// printFavoriteFood("Sarah", "pizza");

// function printWeather(cityName, weather) {
//   console.log("In", cityName, ",", "it is", weather + "°C.");
// }
// printWeather("Chicago", "32");

// function printBookDetails(title, author, yearPublished) {
//   console.log(title, author, yearPublished);
// }
// printBookDetails("Harry Potter", "J.K Rowling", 1997);

// function calculateArea(width, height) {
//   return width * height;
// }
// const area = calculateArea(10, 20);
// console.log("Area: " + area);

// function calculateVolume(width, height, depth) {
//   return width * height * depth;
// }
// const volume = calculateVolume(10, 20, 30);
// console.log("Volume: " + volume);

// function printTicketInfo(eventName, ticketPrice, discount) {
//   console.log(eventName, ticketPrice + "$", discount + "%");
// }
// printTicketInfo("Festival", 20, 5);

//medium
//1.

// function findDigitCount(number, digit) {
//   let digitCount = 0;
//   while (number > 0) {
//     if (digit == number % 10) {
//       digitCount++;
//     }
//     number = Math.floor(number / 10);
//   }

//   console.log(digitCount);
// }
// findDigitCount(1132, 1);

// // 2.
// function nPyramid(num) {
//   let pattern = "";
//   console.log(pattern);
//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= i; j++) {
//       pattern += j;
//     }
//     pattern += "\n";
//   }
//   console.log(pattern);
// }
// nPyramid(6);

// massive

function massive(input) {
  let i = 0;
  let bigNumberCount = 0;
  while (i < input.length) {
    if (input[i] > input[i - 1]) {
      bigNumberCount++;
    }
    i++;
  }
  console.log(bigNumberCount);
}
massive([3, 4, 1, 1, 5, 4, 5]);
