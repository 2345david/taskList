
function editTask(id) {
    let position = tasks.findIndex((x) => x.id === id)
    selectTask = tasks[position]
    console.log(tasks)
    return {
        selectTask, editTask

    }

}

import {tasks} from "../composables/addArrayContent.js";
export let selectTask = {};
export default {
    editTask,
}