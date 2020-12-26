// #1

var bool1 = true;
var bool2 = false;

console.log(bool1 == bool2);

// #2

var num1 = 12;
var num2 = 5;
var moduloResult = 0;

moduloResult = num1 % num2;

console.log(moduloResult);

// #3

var str1 = "Witaj";
var str2 = " Świecie";

let stringsResult = str1 + str2;
console.log(stringsResult);

// #4

var someNumber = 425;
var someString = "425";

console.log(someNumber == someString); // true
console.log(someNumber === someString); // false (different type)

// #5

var counter = 30;
console.log(counter);
counter ++;
console.log(counter);
counter --;
console.log(counter);

// #6

var n1 = 12;
var n2 = 8;
var result = null;

result = n1 > n2;
console.log(result);