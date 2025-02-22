const contentDiv = document.querySelector("#content");
const addTaskDiv = document.createElement("div");
addTaskDiv.className = "add-task-elements";
const taskNameInput = document.createElement("input");
taskNameInput.className = "add-task-elements";
const createTaskButton = document.createElement("button")
createTaskButton.textContent = "Add Task";
createTaskButton.className = "add-task-elements";

const createTask = () => {
    contentDiv.appendChild(addTaskDiv);
    addTaskDiv.appendChild(taskNameInput);
    addTaskDiv.appendChild(createTaskButton);
}

const appendTask = () => {
    // const taskName = taskNameInput.textContent;
    contentDiv.textContent = "";
    const listContainer = document.createElement("ul");
    listContainer.className = "add-task-element";
    const taskList = document.createElement("li");
    taskList.textContent = taskNameInput.textContent;
    contentDiv.appendChild(listContainer);
}

export { createTask, appendTask };