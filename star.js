// // star
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

// right trinangle

let star = "";
let n = 10;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    star += "-";
  }
  for (let k = 0; k <= i; k++) {
    star += "* ";
  }
  star += "\n";
}
console.log(star);

