let taskInput = document.getElementById("Task_Input");
let butAdd =  document.getElementById("ButtonAdding")
let bodyTasks = document.getElementById("BodyTasks")

butAdd.onclick = () => {
    let textinput = taskInput.value

    if (taskInput.value === "") {
        taskInput.classList.add("colorwarm");
        taskInput.value = "You Must Write Any Task"
    }
    else {
        taskInput.classList.remove("colorwarm");
        let content = `
            <div class="Task" id="Taskcont">
                <span class="textcont">${textinput}</span>
                <button id="buttdel" class="buttdelete">Delete</button>
            </div>
        `
    
        bodyTasks.classList.add("spaceBet")
    
        bodyTasks.innerHTML += content
        taskInput.value = ""
    }
}

let Taskcont = document.getElementById("Taskcont")


document.addEventListener("click", (e) => {
    if (e.target.className == "buttdelete") {
        e.target.parentNode.remove()
    }
    else if(e.target.className == "Task"){
        // e.target.classList.toggle("checked")
        e.target.classList.toggle("checked")
    }
})

