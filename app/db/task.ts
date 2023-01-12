import PocketBase from 'pocketbase'
import { Task } from '../../typings'



//A function to add a task to the database
export function addTask(db: PocketBase , task: Task) : Promise<any>{
    return db.collection('tasks').create({
        "name": task.name,
        "description": task.description,
        "start_date": task.start_date,
        "end_date": task.end_date,
        "completed": task.completed,
        
    });
}
//This function is used to update a task in the database
export function updateTask(db: PocketBase, id: string , task: Task) : Promise<any> {
    return db.collection('tasks').update(id,{
        "name": task.name,
        "description": task.description,
        "start_date": task.start_date,
        "end_date": task.end_date,
        "completed": task.completed,
    });
}

//This function is used to remove a task from the database
export function removeTask(db: PocketBase , id: string) : Promise<any>{
    return db.collection('tasks').delete(id);
}

//This function is used to get a single task from the database
export function getOneTask(db: PocketBase ,  id: string) : Promise<any>{
    return db.collection('tasks').getOne(id);
}

//This function grabs all of the tasks from the database.
//Returns a response object in json with a data property, 'items', that contains an array of tasks
export function getAllTasks(db: PocketBase){
    const response = db.collection('tasks').getFullList(50)
    return response

    
   
}