// 1. 10 удаа  "Hello!" гэж хэвлэх
// 2. 1-ээс 10 хүртэлх тоог хэвлэх
// 3. 1-ээс 20 хүртэлх тооны нийлбэр олох
// 4. 1-ээс 20 хүртэлх сондгой тоонуудыг хэвлэх
// 5. Дурын тоо өгөгдөхөд тухайн тооны факториал олох
// 6. Тооны хүрд харуулах програм бич.

// 1. 
for(let i = 0; i < 10; i++) {
    console.log("Hello");
}
// 2. 
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
// 3.
for(let i = 1; i <= 20; i++) {
    i = i + 1; 
     console.log(i)
}  
// 4. 
for(let i = 0; i <= 20; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}
//5. 
let fact = 1;
for(let i = 4; i > 0; i--) {
    fact = fact * i
}
console.log(fact);
//6.
let numToBeMultipled = 4;
for(let multipliers = 1; multipliers < 11; multipliers++) {
    console.log(numToBeMultipled + " * " + multipliers + " = " + numToBeMultipled * multipliers)
}
//7.
let givenNumber = 123;
let reverse = "";
for(givenNumber; givenNumber > 0; givenNumber = Math.floor(givenNumber / 10)) {
    reverse += givenNumber % 10;
}
console.log(reverse);