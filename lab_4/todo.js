const MongoClient = require("mongodb").MongoClient;
const uuidv4 = require('uuid/v4');
const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;

async function createTask(title, description){
  if(!title) throw "You must provide a title for your task";
  if(typeof title !== 'string') throw "The title must be a string"
  if(typeof description !== 'string') throw "the description must be a string"
  let newID = uuidv4();

  const newItem = {
    _id: uuidv4(),
    title: title,
    description: description,
    completed: false,
    completedAt: null
  };
  const tasks = await todoItems();
  const insertInfo = await tasks.insertOne(newItem);
  if(insertInfo.insertedCount === 0) throw "Could not add new Item";
  const newTask = await this.getTask(newItem._id);
  return newTask;

}


async function getAllTasks(){
  const tasks = await todoItems();
  return await tasks.find({}).toArray();
}

async function getTask(id){
  if(typeof id !== 'string') throw "ID must be string";
  if(!id) throw "You must provide an ID"
  const tasks = await todoItems();
  const getTask = await tasks.findOne({ _id: id });

  return getTask;
}

async function completeTask(taskId){
  if(!taskId) throw "You need to provide a task ID";
  const tasks = await todoItems();
  const date = new Date();
  const updatedTask = await tasks.updateOne({_id: taskId},
                                            {$set: {
                                              completed: true,
                                              completedAt: date
                                            }})
   if(updatedTask.modifiedCount === 0) throw "Nothing was updated"
   return await this.getTask(taskId);
}


async function removeTask(id){
  if(!id) throw "You must provide an id to search for.";
  const tasks = await todoItems();
  const deleteInfo = await tasks.removeOne({_id: id});
  if(deleteInfo.deletedCount === 0){
    throw  `Could not delete task with the id of ${id}`;
  }

}
module.exports = {
  createTask,
  getAllTasks,
  getTask,
  completeTask,
  removeTask
}
