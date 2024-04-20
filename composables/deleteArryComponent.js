function deleteTask(id){
    let position = tasks.findIndex((x)=> x.id === id)

    tasks.splice(position,1)

    localStorage.setItem("contacts", JSON.stringify(tasks))
    console.log(tasks)
    return{
        deleteTask,
        position
    }
}
export default deleteTask
import {tasks} from "../composables/showTask.js";
