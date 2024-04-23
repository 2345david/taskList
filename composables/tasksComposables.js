export let tasks = []
export let selectTask = {}
import {ref} from 'vue';

export function createTask(title, description, date) {
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

export function deleteTask(id) {
    const position = ref(tasks.findIndex((x) => x.id === id))
    tasks.splice(position.value, 1)

    localStorage.setItem("tasks", JSON.stringify(tasks))
    console.log(tasks)
    return {
        deleteTask,
        position
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