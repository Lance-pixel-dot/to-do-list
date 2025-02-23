import { displayTask } from "./display-task";

const addTaskButton = document.querySelector('.add-task');
const cancelButton = document.querySelector('.close-dialog');
const submitTaskButton = document.querySelector('.submit-task');
const taskTitleInput = document.querySelector('.task-title');
const taskDescriptionInput = document.querySelector('.task-description');
const taskDueDateInput = document.querySelector('.task-due-date');
const taskTimeInput = document.querySelector('.task-time');
const taskPriorityInput = document.querySelector('#priority');
const taskRepeatInput = document.querySelector('#repeat');
const dialog = document.querySelector('dialog');

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

const taskArr = [];

addTaskButton.addEventListener('click', () => {
    dialog.showModal();
});

cancelButton.addEventListener('click', () => {
    dialog.close();
});

submitTaskButton.addEventListener('click', () => {
    const taskTitle = taskTitleInput.value;
    const taskDescription = taskDescriptionInput.value;
    const taskDueDate = taskDueDateInput.value;
    const taskTime = taskTimeInput.value;
    const taskPriority = taskPriorityInput.value;
    const taskRepeat = taskRepeatInput.value;

    const newTask = new Task(taskTitle, taskDescription, taskDueDate, taskTime, taskPriority, taskRepeat);

    taskArr.push(newTask);

    displayTask();

    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
    taskDueDateInput.value = "";
    taskTimeInput.value = "";
    taskPriorityInput.value = "";
    taskRepeatInput.value = "";
});

export { taskArr, addTaskButton };