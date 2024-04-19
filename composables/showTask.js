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
    return{
        createTask,
        tasks
    }
}
export default createTask
export const tasks = []