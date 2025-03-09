import { formatDate, formatTime, isTaskOnQueue } from "./date-time-format";
import { deleteTask } from "./remove-task";
import { editTask } from "./edit-task";

const contentDiv = document.querySelector('#content');

function displayTask(task, customAttributeName, customAttributeValue){

  // let index = 0;

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
    
      // isTaskOnQueue(formatDate(getTimeAndDate), formatTime(getTimeAndDate), getTimeAndDate);
    });

  }else if(contentDiv.textContent == ""){

    const allTaskHeader = document.createElement('h2'); 
    allTaskHeader.textContent = 'All Tasks';
    contentDiv.appendChild(allTaskHeader);
    
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
            
      // isTaskOnQueue(formatDate(getTimeAndDate), formatTime(getTimeAndDate), getTimeAndDate);
    });

  }

};

export { displayTask, contentDiv };