const tasks = []
const createTask = (title, date, description) => {
    let id = Math.floor(Math.random() * 100000000);
    let task = {
        title: title,
        date: date,
        description: description,
        id: id
    }
    tasks.push(task)
    console.log(tasks)
}
export default createTask;