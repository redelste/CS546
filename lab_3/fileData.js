const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const prompt = bluebird.promisifyAll(require("prompt"));
const fs = bluebird.promisifyAll(require("fs"));

module.exports = {
  async getFileAsString(path){
    if(!path){ throw "Need to provide a file name"; }
    if((typeof path) !== 'string'){
      throw "ERROR PATH MUST BE STRING"
    }
    return fs.readFileAsync(path, 'utf-8');
  },

  async getFileAsJSON(path){
    if((typeof path) !== 'string'){throw `${path} needs to be a string dude`}
    try{
      const fileContent = await fs.readFileAsync(path, 'utf-8');
      JSON.parse(fileContent)
    } catch(e){
      throw  `Cannot JSONify`;
    }
    return JSON.parse(await this.getFileAsString(path));
  },
  async saveStringToFile(path,text){
    if((typeof path) !== 'string' || (typeof text) !== 'string'){
      throw   `The input types were incorrect`;
    }
    fs.writeFileAsync(path,text, 'utf-8',(err)=>{
      if(err) throw err;
      // console.log('The file has been saved!');
    });
    return true;
  },
  async saveJSONToFile(path,obj){
    if(typeof path !== 'string'){
      throw `${path} needs to be a string dude`
    }
    if(typeof obj !== 'object'){
      throw  `OBJ must be  an object my guy`
    }
    try{JSON.stringify(obj)} catch(err){throw 'obj not JSONable'};
    fs.writeFileAsync(path, JSON.stringify(obj), 'utf-8', (err)=>{
      if(err) throw err;
    })
    return true;
  }
};
