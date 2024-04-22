
let selectTask = {  }


function editTask(id) {
    let position = tasks.findIndex((x) => x.id === id)
   selectTask = tasks[position]
    console.log(tasks)
    return {
        position,
        selectTask,
        editTask

    }

}


import {tasks} from "../composables/addArrayContent.js";
export default {
    editTask,
    selectTask
}