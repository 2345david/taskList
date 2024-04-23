/*
function createTask(title, description, date) {
    let id = Math.floor(Math.random() * 100000000);
    let task = {
        title: title,
        date: date,
        description: description,
        id: id
    }
    tasks.push(task)
    console.log(tasks)
    return {
        tasks,
        createTask
    }
}

export default createTask;
export const tasks = []
export const task = []
 */
import {ref} from 'vue' //import ref to use it later
export let tasks = []
export function createTask(title, description, date) {
    let id = Math.floor(Math.random() * 100000000);
    let task = ref ({
        title: title,
        date: date,
        description: description,
        id: id
    })
    tasks.push(task.value)
    console.log(tasks)
    return {
        task,
        tasks,
        createTask
    }
}

