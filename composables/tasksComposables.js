export let tasks = []
export let selectTask = {}
export let position = ""
import {ref} from 'vue';

export function createTask(title, description, date) {
    if (title != "" && date != "" && description != "") {
        const id = Math.floor(Math.random() * 10000000);
        let task = ref({
            title: title,
            date: date,
            description: description,
            id: id
        })
        tasks.push(task.value)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        console.log(tasks)
        return {
            createTask,
            tasks,
        }
    }
    }

export function modifyTask(id) {
    let position = tasks.findIndex((x) => x.id === id)
    selectTask = tasks[position]
    return {
        modifyTask,
        selectTask
    }
}
export function deleteTask() {
    tasks.splice(position, 1)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    console.log(tasks)
    return{
        deleteTask,
    }
}
export function idSelector(id){
    position = tasks.findIndex((x) => x.id === id)
}
