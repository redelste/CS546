const tasks = require("./todo.js");
const collection = require("./mongoCollections");
const connection = require("./mongoConnection");

async function clear(){
  const database = await connection();
  await database.dropDatabase().catch(function(e){
    console.err(e.backtrace);
  });
  await database.serverConfig.close();
}



async function main(){
  try{
    let testtask1 = await tasks.createTask("Ponder Dinosaur", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
    console.log(testtask1); //steap 2
    let testtask2 = await tasks.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
    let getTest1 = await tasks.getAllTasks();
    console.log(getTest1); //step 3
    await tasks.removeTask(testtask1._id); //step4
    console.log(await tasks.getAllTasks()); //step5
    let test3 = await tasks.completeTask(testtask2._id); //step 6
    console.log(test3); //step 7
  } catch(err){
    console.log(err);
  }

  clear();
}



main();
