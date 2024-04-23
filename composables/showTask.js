/*function createTask(title, description, date) {

    let id = Math.floor(Math.random() * 100000000);
    let task = ref({
        title: title,
        date: date,
        description: description,
        id: id
    })
    tasks.push(task.value)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    console.log(tasks)

    return{
        createTask,
        tasks
    }
}
export default createTask
export const tasks = []*/

export let tasks = []
import {ref} from 'vue';
export function createTask(title, description, date){
    const id = Math.floor(Math.random() * 10000000);
    let task = ref( {
        title: title,
        date: date,
        description: description,
        id: id
    })
    tasks.push(task.value)
        localStorage.setItem("tasks", JSON.stringify(tasks))
    console.log(tasks)
    return{
        createTask,
        tasks,
    }
}