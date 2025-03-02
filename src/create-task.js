import { Task } from ".";
import { storeTask } from "./web-storage";

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

    storeTask(newTask);

    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
    taskDueDateInput.value = "";
    taskTimeInput.value = "";
    taskPriorityInput.value = "";
    taskRepeatInput.value = "";
});

export { addTaskButton };