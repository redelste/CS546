const bluebird = require("bluebird");
const Promise = bluebird.Promise;
// const prompt = bluebird.promisifyAll(require("prompt"));
const fs = bluebird.promisifyAll(require("fs"));

const fileData = require('./fileData.js')
const textMetrics = require('./textMetrics')


async function main(file){
  if(!file){
    throw "Need to provide a file name";
  }
  await fs.readFileAsync(file+".result.json", "utf-8", async function(fileReadError, _) {
    if (fileReadError) {
      await fileData.saveStringToFile(file+".debug.txt",await textMetrics.simplify(await fileData.getFileAsString(file+".txt")))
      await fileData.saveJSONToFile(file+".result.json",
      await textMetrics.createMetrics(await textMetrics.simplify(await fileData.getFileAsString(file+".txt"))))
      console.log(await textMetrics.createMetrics(await textMetrics.simplify(await fileData.getFileAsString(file+".txt"))))
    } else {
      console.log(await fileData.getFileAsString(file+".result.json"))
    }
  })
}

main("chapter1");
main("chapter2");
main("chapter3");
