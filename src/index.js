import "./styles.css";

const contentDiv = document.querySelector("#content");
const addTaskButton = document.querySelector(".add-task");
const titleInput = document.createElement("input");
const descriptionInput = document.createElement("input");
const dueDateInput = document.createElement("input");
const priorityInput = document.createElement("input");
const timeInput = document.createElement("input");
const repeatInput = document.createElement("input");
const submitTask = document.createElement("button");
submitTask.textContent = "OK";

class Task {

    constructor(title, description, dueDate, priority, time, repeat){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.time = time;
        this.repeat = repeat;
    }
}

addTaskButton.addEventListener("click", () => {
    contentDiv.appendChild(titleInput);
    contentDiv.appendChild(descriptionInput);
    contentDiv.appendChild(dueDateInput);
    contentDiv.appendChild(priorityInput);
    contentDiv.appendChild(timeInput);
    contentDiv.appendChild(repeatInput);
    contentDiv.appendChild(submitTask);
})

const displayTask = (taskTitle, taskDescription, taskDueDate, taskPriority, taskTime, taskRepeat) => {

    contentDiv.textContent = `${taskTitle}, ${taskDescription}, ${taskDueDate}, ${taskPriority}, ${taskTime}, ${taskRepeat}`;
}


submitTask.addEventListener("click", () => {
    const newTask = new Task(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, timeInput.value, repeatInput.value);

    displayTask(newTask.title, newTask.description, newTask.dueDate, newTask.priority, newTask.time, newTask.repeat);
});

// const createNewTask = () => {
// }

//create a function that gets the task details from user input