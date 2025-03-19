import { formatDate } from "./date-format";
import { deleteTask } from "./remove-task";
import { editTask } from "./edit-task";
import { completeTask } from "./complete-task";

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

    const createCompleteButton = document.createElement('button');
    createCompleteButton.textContent = "Mark as complete";
    createCompleteButton.addEventListener('click', completeTask);

    task.forEach(e => {

      // const getDate = `${e.dueDate}`;

      contentDiv.appendChild(taskContainer);
      taskContainer.appendChild(taskDetails);

      if(taskHeaderName.textContent != 'Completed Tasks'){
        taskContainer.appendChild(createEditButton);
        taskContainer.appendChild(createDeleteButton);
        taskContainer.appendChild(createCompleteButton);
      }   

      taskDetails.textContent = `Title: ${e.title}, Description: ${e.description}, Date: ${formatDate(e.dueDate)}, Priority: ${e.priority}`;
    
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

      const createCompleteButton = document.createElement('button');
      createCompleteButton.textContent = "Mark as complete";
      createCompleteButton.addEventListener('click', completeTask);
            
      // const getTimeAndDate = `${e.dueDate} ${e.time}`

      contentDiv.appendChild(taskContainer);
      taskContainer.appendChild(taskDetails);

      if(taskHeaderName.textContent != 'Completed Tasks'){
        taskContainer.appendChild(createEditButton);
        taskContainer.appendChild(createDeleteButton);
        taskContainer.appendChild(createCompleteButton);
      }   
            
      taskDetails.textContent = `Title: ${e.title}, Description: ${e.description}, Date: ${formatDate(e.dueDate)}, Priority: ${e.priority}`;
            
    });

  }

};

export { displayTask, contentDiv, taskHeaderName };