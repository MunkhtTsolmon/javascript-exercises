//1.
let a = 4;
let b = 3;
console.log(a > 3);

//2.
console.log(a < b);
//3.
console.log(a >= b);
//4.
console.log(a <= b);
//5.
let c = 4;
console.log(a == c);
//6.
console.log(a === b);
//7.
console.log(a != c);
//8.
let d = "4";
console.log(a != d);
//9.
console.log(a === d);
//10.
console.log(a == d);
//11.
let e = 10;
let f = 12;
console.log(a > b && e < f);
//12.
console.log(a > b && e > f);
//13.
console.log(a > b || e < f);

//14.
console.log(a > b || e > f);
//15.
console.log(a < b || e > f);
//16.
let five = !(4 > 3);
console.log(five);
//17.
let seven = !(4 > 3 && 10 < 12);
console.log(seven);
//18.
let eight = !(4 > 3 && 10 > 12);
console.log(eight);
//19.
let six = !(4 < 3);
console.log(six);
//20.
let nine = !(4 === "4");
console.log(nine);
//21.
let A = 2;
let B = 10;

console.log((B % A) * (A % B) + (A + B));
