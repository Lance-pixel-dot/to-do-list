import { Task, Project } from ".";
import { storeTask } from "./web-storage";

const addTaskButton = document.querySelector('.add-task');
const cancelButton = document.querySelector('.close-dialog');
const submitTaskButton = document.querySelector('.submit-task');
const taskForm = document.querySelector('.task-form');
const taskTitleInput = document.querySelector('.task-title');
const taskDescriptionInput = document.querySelector('.task-description');
const taskDueDateInput = document.querySelector('.task-due-date');
// const taskTimeInput = document.querySelector('.task-time');
const taskPriorityInput = document.querySelector('#priority');
// const taskRepeatInput = document.querySelector('#repeat');
const dialog = document.querySelector('.add-new-task');
const projectNameInput = document.querySelector('#project');
// const project = document.querySelector('#project');

addTaskButton.addEventListener('click', () => {

    submitTaskButton.className = "submit-task";

    dialog.showModal();

    submitTaskButton.textContent = "Submit";

});

taskForm.addEventListener('submit', e => {
    e.preventDefault();

    if(submitTaskButton.className == 'submit-task'){
        const taskTitle = taskTitleInput.value;
        const taskDescription = taskDescriptionInput.value;
        const taskDueDate = taskDueDateInput.value;
        // const taskTime = taskTimeInput.value;
        const taskPriority = taskPriorityInput.value;
        // const taskRepeat = taskRepeatInput.value;
        const projectName = projectNameInput.value

        const newTask = new Task(taskTitle, taskDescription, taskDueDate, taskPriority, projectName);

        // console.log(taskPriority);

        storeTask(newTask);

        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
        taskDueDateInput.value = "";
        // taskTimeInput.value = "";
        taskPriorityInput.value = "";
        // taskRepeatInput.value = "";
        projectNameInput.value = "";
    }
    
})

cancelButton.addEventListener('click', () => {
    dialog.close();

    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
    taskDueDateInput.value = "";
    // taskTimeInput.value = "";
    taskPriorityInput.value = "";
    // taskRepeatInput.value = "";
});

export { addTaskButton, submitTaskButton, cancelButton, taskTitleInput, taskDescriptionInput, taskDueDateInput, taskPriorityInput, dialog, taskForm };