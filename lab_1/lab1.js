
'use strict'
const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let a = arr;
    let arrayLength = arr.length;
    let temp = 0;
    for ( let i = 0; i  < arrayLength; i++){
      temp = temp + (a[i] * a[i]);
    }
    return temp;
}

const questionTwo = function questionTwo(num) {
    // Implement question 2 here
    if(num == 0){
      return 0;
    } else if(num == 1){
      return 1;
    }
    num = questionTwo(num-2) + questionTwo(num - 1);
    return num;
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    let count = 0;
    let vowels = 'aeiouAEIOU'
    for(let i = 0; i < text.length; i++){
      if(vowels.indexOf(text[i]) !== -1){
        count = count+1;
      }
    }
   return count;

}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if(num < 0){
      return NaN;
    }
    else if(num == 1){
      return 1;
    }
    else if(num == 0){
      return 1;
    }
    num = num*(questionFour(num-1))
    return num;
}

module.exports = {
    firstName: "Ryan",
    lastName: "Edelstein",
    studentId: "10410555",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
