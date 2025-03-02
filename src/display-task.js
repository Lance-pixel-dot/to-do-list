import { formatDate, formatTime, isTaskOnQueue } from "./date-time-format";
import { deleteTask } from "./remove-task";

const contentDiv = document.querySelector('#content');

function displayTask(task, key){

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    taskContainer.setAttribute("key", key);

    const taskDetails = document.createElement('p');

    const createDeleteButton = document.createElement('button')
    createDeleteButton.className = "delete-button";
    createDeleteButton.textContent = "Remove task";
    createDeleteButton.addEventListener('click', deleteTask);

    const getTimeAndDate = `${task.dueDate} ${task.time}`
    
    console.log(task);

    contentDiv.appendChild(taskContainer);
    taskContainer.appendChild(taskDetails);
    taskContainer.appendChild(createDeleteButton);

    taskDetails.textContent = `Title: ${task.title}, Description: ${task.description}, Date: ${formatDate(getTimeAndDate)}, Time:${formatTime(getTimeAndDate)}, Priority: ${task.priority}, Repeat: ${task.repeat}`;
    
    isTaskOnQueue(formatDate(getTimeAndDate), formatTime(getTimeAndDate), getTimeAndDate);

    // const getDeleteButton = document.querySelector('.delete-button');

};

export { displayTask, contentDiv };