import { formatDate, formatTime, isTaskOnQueue } from "./date-time-format";
import { deleteTask } from "./remove-task";

const contentDiv = document.querySelector('#content');

function displayTask(task){

    if(contentDiv.textContent != ""){

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';

    const taskDetails = document.createElement('p');

    const createDeleteButton = document.createElement('button');
    createDeleteButton.className = "delete-button";
    createDeleteButton.textContent = "Remove task";
    createDeleteButton.addEventListener('click', deleteTask);

    task.forEach(e => {

        const getTimeAndDate = `${e.dueDate} ${e.time}`
    
        console.log(e);

        contentDiv.appendChild(taskContainer);
        taskContainer.appendChild(taskDetails);
        taskContainer.appendChild(createDeleteButton);

        taskDetails.textContent = `Title: ${e.title}, Description: ${e.description}, Date: ${formatDate(getTimeAndDate)}, Time:${formatTime(getTimeAndDate)}, Priority: ${e.priority}, Repeat: ${e.repeat}`;
    
        isTaskOnQueue(formatDate(getTimeAndDate), formatTime(getTimeAndDate), getTimeAndDate);
    });

  }else if(contentDiv.textContent == ""){
    
    task.forEach(e => {

        const taskContainer = document.createElement('div');
        taskContainer.className = 'task-container';
            
        const taskDetails = document.createElement('p');
            
        const createDeleteButton = document.createElement('button');
        createDeleteButton.className = "delete-button";
        createDeleteButton.textContent = "Remove task";
        createDeleteButton.addEventListener('click', deleteTask);
            
        const getTimeAndDate = `${e.dueDate} ${e.time}`
            
        console.log(e);
            
        contentDiv.appendChild(taskContainer);
        taskContainer.appendChild(taskDetails);
        taskContainer.appendChild(createDeleteButton);
            
        taskDetails.textContent = `Title: ${e.title}, Description: ${e.description}, Date: ${formatDate(getTimeAndDate)}, Time:${formatTime(getTimeAndDate)}, Priority: ${e.priority}, Repeat: ${e.repeat}`;
            
        isTaskOnQueue(formatDate(getTimeAndDate), formatTime(getTimeAndDate), getTimeAndDate);
    });

  }

};

export { displayTask, contentDiv };