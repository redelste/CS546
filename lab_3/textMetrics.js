async function simplify(text){
  if(!text){
    throw `Input must be a string `
  }
  if(typeof text !== 'string'){
    throw `Input must be a string`
  }else{
    let texty = text.trim().toLowerCase().replace(/[^\w\s]|_/g, '').replace(/\s+/g, " ").replace(/[0-9]/g,'')
    return texty;
  }
}

async function createMetrics(text){
  if(!text){
    throw `Input must be a string `
  }
  if(typeof text !== 'string'){
    throw `Input must be a string`}
  let simplified = await simplify(text); //uses the simplify function to remove extraneous stuff and create a list of simplified
  //total simplified
  //total words
  console.log("_--------------------------------")
  console.log(simplified.split(' '));
  console.log("_--------------------------------")
  const words = simplified.split(' ').filter((e)=>e!=""); //creates a list of words
  let countWord = 0;
  let countLong = 0;
  for(let i = 0; i< words.length; i++){
    if(words[i] !== '')
    {
      countWord++;
    }
    if(words[i].length >= 6){
      countLong++;
    }
  }
  //longwords
  //UNIQUE words
  let countUnique = 0;
  for(let i = 0; i < simplified.length; i++){
    if(words.indexOf(words[i]) == i){
      countUnique++;
    }
  }
  //wordOccurrences
  let wordOccurrences = {};
  for(let i of simplified.split(' ').filter((e) => e != "")){
    if(wordOccurrences[i]){
      wordOccurrences[i] += 1;
    } else{
      wordOccurrences[i] = 1;
    }
  }
  //longwords: if words[i].length > 6
  //avg word = total length / wordcount
  let averageWordLen = words.reduce((average, word) => {return average + word.length},0) / words.length;
  let totalLett = simplified.replace(/\s/g, '').length;
  let answer = {};
  answer['longWords'] = countLong;
  answer['averageWordLength'] = isNaN(averageWordLen) ? 0 : averageWordLen;
  answer['totalLetters'] = totalLett;
  answer['uniqueWords'] = countUnique;
  answer['totalWords'] = countWord;
  answer['wordOccurrences'] = wordOccurrences
  return answer;
}
module.exports = {
  simplify,
  createMetrics
}
