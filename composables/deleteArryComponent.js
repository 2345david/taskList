function deleteTask(id){
    let position = tasks.findIndex((x)=> x.id === id)
    tasks.splice(position,1)
    localStorage.setItem("contactos", JSON.stringify(tasks))
    return{
        position
    }
}
export default deleteTask

import {tasks} from "~/composables/showTask.js";
