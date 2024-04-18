function createTask(title, date, description) {
    let id = Math.floor(Math.random() * 100000000);
    let task = {
        title: title,
        date: date,
        description: description,
        id: id
    }
    this.tasks.push(task)
    console.log(this.tasks)


}

export default createTask;