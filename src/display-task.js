import { formatDate, formatTime, isTaskOnQueue } from "./date-time-format";
import { deleteTask } from "./remove-task";

const contentDiv = document.querySelector('#content');

function displayTask(data){

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    taskContainer.setAttribute("data-index", localStorage.length - 1);
    const taskDetails = document.createElement('p');
    const createDeleteButton = document.createElement('button');
    createDeleteButton.className = "delete-button";

    createDeleteButton.textContent = "Remove task";

    const getTimeAndDate = `${data.dueDate} ${data.time}`
    
    console.log(data);

    contentDiv.appendChild(taskContainer);
    taskContainer.appendChild(taskDetails);
    taskContainer.appendChild(createDeleteButton);

    taskDetails.textContent = `Title: ${data.title}, Description: ${data.description}, Date: ${formatDate(getTimeAndDate)}, Time:${formatTime(getTimeAndDate)}, Priority: ${data.priority}, Repeat: ${data.repeat}`;
    
    isTaskOnQueue(formatDate(getTimeAndDate), formatTime(getTimeAndDate), getTimeAndDate);

    const getDeleteButton = document.querySelectorAll('.delete-button');

    deleteTask(getDeleteButton);

};

export { displayTask, contentDiv };