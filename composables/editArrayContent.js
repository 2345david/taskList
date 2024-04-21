let selectTask = {}
function editTask(id) {
    let position = this.task.findIndex((x) => x.id === id)
    selectTask = this.task[position]
    return {
        selectTask,
        editTask

    }
}
export default editTask;
