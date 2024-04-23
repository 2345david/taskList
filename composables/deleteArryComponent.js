export function deleteTask(id){
    const position = ref(tasks.findIndex((x)=> x.id === id))
    tasks.splice(position.value,1)

    localStorage.setItem("tasks", JSON.stringify(tasks))
    console.log(tasks)
    return{
        deleteTask,
        position
    }
}