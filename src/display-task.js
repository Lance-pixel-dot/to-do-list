import { formatDate, formatTime } from "./date-time-format";
import { deleteTask } from "./remove-task";
import { editTask } from "./edit-task";

const contentDiv = document.querySelector('#content');
const taskHeaderName = document.createElement('h2'); 

function displayTask(task, customAttributeName, customAttributeValue){

  if(contentDiv.textContent != ""){

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    taskContainer.setAttribute(customAttributeName, customAttributeValue);

    const taskDetails = document.createElement('p');

    const createDeleteButton = document.createElement('button');
    createDeleteButton.textContent = "Remove task";
    createDeleteButton.addEventListener('click', deleteTask);

    const createEditButton = document.createElement('button');
    createEditButton.textContent = "Edit Task";
    createEditButton.addEventListener('click', editTask);

    task.forEach(e => {

      const getTimeAndDate = `${e.dueDate} ${e.time}`

      contentDiv.appendChild(taskContainer);
      taskContainer.appendChild(taskDetails);
      taskContainer.appendChild(createEditButton);
      taskContainer.appendChild(createDeleteButton);

      taskDetails.textContent = `Title: ${e.title}, Description: ${e.description}, Date: ${formatDate(getTimeAndDate)}, Time:${formatTime(getTimeAndDate)}, Priority: ${e.priority}, Repeat: ${e.repeat}`;
    
    });

  }else if(contentDiv.textContent == ""){

    contentDiv.appendChild(taskHeaderName);
    
    task.forEach(e => {

      const taskContainer = document.createElement('div');
      taskContainer.className = 'task-container';
      taskContainer.setAttribute(customAttributeName, customAttributeValue);
            
      const taskDetails = document.createElement('p');
            
      const createDeleteButton = document.createElement('button');
      createDeleteButton.textContent = "Remove task";
      createDeleteButton.addEventListener('click', deleteTask);

      const createEditButton = document.createElement('button');
      createEditButton.textContent = "Edit Task";
      createEditButton.addEventListener('click', editTask);
            
      const getTimeAndDate = `${e.dueDate} ${e.time}`
            
      contentDiv.appendChild(taskContainer);
      taskContainer.appendChild(taskDetails);
      taskContainer.appendChild(createEditButton);
      taskContainer.appendChild(createDeleteButton);
            
      taskDetails.textContent = `Title: ${e.title}, Description: ${e.description}, Date: ${formatDate(getTimeAndDate)}, Time:${formatTime(getTimeAndDate)}, Priority: ${e.priority}, Repeat: ${e.repeat}`;
            
    });

  }

};

export { displayTask, contentDiv, taskHeaderName };