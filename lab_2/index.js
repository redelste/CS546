'use strict'

const test = require("./geometry.js");
const test2 = require("./utilities.js")




console.log("------------------------------------------------------------------")

console.log("volumeOfRectangularPrism(4,3,4): ");
console.log(test.volumeOfRectangularPrism(4,3,4))
console.log("(should be 48 )")

//console.log(test.volumeOfRectangularPrism(x,3,2)); //test if it works letters (it shouldnt)

try{
  let testyboi1 = test.volumeOfRectangularPrism(-1,4,3);
}catch(e){
  console.log(e);
}

try{
  let testyboi2 = test.volumeOfRectangularPrism(1,5);
} catch(e){
  console.log(e);
}
try{
  let testyboi3 = test.volumeOfRectangularPrism(0,1,3);
} catch(e){
  console.log(e);
}
try{
  console.log(test.volumeOfRectangularPrism(4, "T",4));
} catch(e){
  console.log(e);
}
console.log(test.volumeOfRectangularPrism(15.2,12.5,59.1));

console.log("------------------------------------------------------------------")

console.log(test.surfaceAreaOfRectangularPrism(5,5,5)); // should be 150
//test with negative input
try{
  console.log(test.surfaceAreaOfRectangularPrism(-2,4,3));
} catch(e){
  console.log(e);
}
  //test with null input
try{
  console.log(test.surfaceAreaOfRectangularPrism());
} catch(e){
  console.log(e);
}//test with non numerical input
try{
  console.log(test.surfaceAreaOfRectangularPrism("x",2,3));
} catch(e){
  console.log(e);
}
try{
  //test with 0 as input surface area cannot be 0.
  console.log(test.surfaceAreaOfRectangularPrism(0,2,1));
} catch(e){
  console.log(e);
}
console.log("------------------------------------------------------------------")
console.log(test.volumeOfSphere(5));
console.log(test.volumeOfSphere(15.5));
try{
console.log(test.volumeOfSphere(0));
} catch(e){
  console.log(e);
}
try{
console.log(test.volumeOfSphere("x"));
} catch(e){
  console.log(e);
}
try{
console.log(test.volumeOfSphere(-1));
} catch(e){
  console.log(e);
}
try{
  console.log(test.volumeOfSphere());
} catch(e){
  console.log(e);
}

console.log("------------------------------------------------------------------")
console.log(test.surfaceAreaOfSphere(5));

try{
  let radiusNeg = test.surfaceAreaOfSphere(-1);
} catch(e) {
  console.log("The radius cannot be negative");
}
try{
console.log(test.surfaceAreaOfSphere(0));
} catch(e){
  console.log(e)
}
try{
console.log(test.surfaceAreaOfSphere("x"));
}catch(e){
  console.log(e);
}
try{
 console.log(test.surfaceAreaOfSphere(-1));
} catch(e){
  console.log(e);
}
//////////////////////test2//////////////////////////////////////////////////////
console.log("------------------------------------------------------------------")

                  //should be 5
const testArr = ["a", "a", "b", "a", "b", "c", "d", "f"]; //tested on unsorted array
const testArr2 = ["a", "b", "c", "d", "4", "4", "4"];
try{
  console.log(test2.uniqueElements(testArr));
} catch(e){
  console.log(e);
}
try{
console.log(test2.uniqueElements([])); //test for empty arrayLength Should be 0;
} catch(e){
  console.log(e);
}
try{
  console.log(test2.uniqueElements(["a", "2", "b", "3"])); //tested for a list of numbers and letters
} catch(e){
  console.log(e);
}
try{
console.log(test2.uniqueElements(["a", "b", "c"])); //tested on an already sorted array
} catch(e){
  console.log(e);
}
try{
console.log(test2.uniqueElements(["b"])); //returns 1 for array of length 1
} catch(e){
  console.log(e);
}

console.log("------------------------------------------------------------------");
let testStr = "Hello, the pie is in the oven";
let countOfEachCharacterInString = test2.countOfEachCharacterInString(testStr);
if(countOfEachCharacterInString ===
{ ' ': 6,
  ',': 1,
  H: 1,
  e: 5,
  h: 2,
  i: 3,
  l: 2,
  n: 2,
  o: 2,
  p: 1,
  s: 1,
  t: 2,
  v: 1
})
 {
   throw `THE COUNT OF EACH CHAR IN STRING WAS INCORRECT countOfEachCharacterInString`
   console.log("countOfEachCharacterInString");
 } else{
   console.log("The count of each character in the string was correct\ncountOfEachCharacterInString");
 }

console.log(test2.countOfEachCharacterInString("Hello, the pie is in the oven")); //first test
console.log(test2.countOfEachCharacterInString(""));//test on empty string

console.log(test2.countOfEachCharacterInString("Test with numbers 4 5 1"));
console.log(test2.countOfEachCharacterInString("Test with multiple spaces             "));
console.log(test2.countOfEachCharacterInString("t"))//test with 1 character
try{
console.log(test2.countOfEachCharacterInString()); //returns that the string is undefined
} catch(e){
  console.log(e);
}
console.log("testing")
console.log("------------------------------------------------------------------");
const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
const fat = {a: 5, b: { c : 10, d : 11, e : {f:true, g:"test"}}}
try{
  console.log(test2.deepEquality(first, third))
}catch(e){
  console.log(e);
}
console.log("1 and 2 are not objects")
try{
  console.log(test2.deepEquality(1,2))
}catch(e){
  console.log(e);
}

try{
  console.log(test2.deepEquality())
} catch(e){
  console.log(e)
}

try{
  console.log(test2.deepEquality(first))
} catch(e){
  console.log(e)
}
// let deepEquality = test2.deepEquality(first, second);
// console.log(test2.deepEquality(first,second));
// // console.log(deepEquality(first, second)); // false
//  console.log(test2.deepEquality(first, third)); // true
// const empty = {};
// const testeroni = {b:3};
// console.log(test2.deepEquality(first, empty)); //false
// console.log(test2.deepEquality(first, testeroni)); //false
// console.log(test2.deepEquality(second, empty));
// console.log(test2.deepEquality(second, testeroni));
