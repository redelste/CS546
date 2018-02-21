'use strict'
function deepEquality(obj1, obj2) {
    if(typeof obj1 === 'undefined' ||typeof obj2 === 'undefined'){
      throw `OBJECTS MUST HAVE SOMETHING IN THEM`
    }
    if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)) {
      if (Object.keys(obj1).length != Object.keys(obj2).length)
        return false;
      for (var i in obj1) {
        if (obj2.hasOwnProperty(i))
        {
          if (!deepEquality(obj1[i], obj2[i]))
            return false;
        }
        else
          return false;
      }
      return true;
    }
    else if (obj1 !== obj2)
      return false;
    else
      return true;
  }
function uniqueElements(arr){
  arr.sort();
  var count = 0;
  for(var i = 0; i < arr.length+2; i++)  {
    if (arr[i] !== arr[i+1]){
      count += 1;
    }

    if(arr.length == 1){
      return 1;
    }
    else{
      count += 0;
    }
  }

  return count;
}

function countOfEachCharacterInString(str){
  if((typeof str) === "undefined"){
    throw `String cannot be undefined`;
  }
  const len = str.length;
  let x = {};
  const sorted = str.split('').sort();
  for(var i = 0; i < sorted.length; i++){
      if(sorted[i] in x){
        x[sorted[i]] +=1;
      }
      else{
        x[sorted[i]] = 1;
      }
  }
  //console.log(x);
  return x;
}



module.exports = {
    firstName: "Ryan",
    lastName: "Edelstein",
    studentId: "10410555",
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
};
