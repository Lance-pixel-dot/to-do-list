import { formatDate } from "./date-format";
import { deleteTask } from "./remove-task";
import { editTask } from "./edit-task";
import { completeTask } from "./complete-task";
import { overdueSpan } from "./overdue-task";
import { viewTask } from "./view-task";

const contentDiv = document.querySelector('#content');
const taskHeaderName = document.createElement('h2');
const taskList = document.createElement('div');

function displayTask(task, customAttributeName, customAttributeValue){

  if(contentDiv.textContent != ""){

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    taskContainer.setAttribute(customAttributeName, customAttributeValue);

    const taskDetails = document.createElement('p');
    taskDetails.setAttribute('class', 'task-info');

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

      taskList.appendChild(taskContainer)
      taskContainer.appendChild(taskDetails);

      if(taskHeaderName.textContent != 'Completed Tasks'){
        taskContainer.appendChild(createEditButton);
        taskContainer.appendChild(createDeleteButton);
        taskContainer.appendChild(createCompleteButton);
      }  

      taskDetails.textContent = `Title: ${e.title}, Date: ${formatDate(e.dueDate)}, Priority: ${e.priority}`;
    
    });

  }else if(contentDiv.textContent == ""){
   
    contentDiv.appendChild(taskHeaderName);
    contentDiv.appendChild(overdueSpan);
    contentDiv.appendChild(taskList);
    
    task.forEach(e => {

      const taskContainer = document.createElement('div');
      taskContainer.className = 'task-container';
      taskContainer.setAttribute(customAttributeName, customAttributeValue);
            
      const taskDetails = document.createElement('p');
      taskDetails.setAttribute('class', 'task-info');
            
      const createDeleteButton = document.createElement('button');
      createDeleteButton.textContent = "Remove task";
      createDeleteButton.addEventListener('click', deleteTask);

      const createEditButton = document.createElement('button');
      createEditButton.textContent = "Edit Task";
      createEditButton.addEventListener('click', editTask);

      const createCompleteButton = document.createElement('button');
      createCompleteButton.textContent = "Mark as complete";
      createCompleteButton.addEventListener('click', completeTask);

      taskList.appendChild(taskContainer);
      taskContainer.appendChild(taskDetails);

      if(taskHeaderName.textContent != 'Completed Tasks'){
        taskContainer.appendChild(createEditButton);
        taskContainer.appendChild(createDeleteButton);
        taskContainer.appendChild(createCompleteButton);
      }
            
      taskDetails.textContent = `Title: ${e.title}, Date: ${formatDate(e.dueDate)}, Priority: ${e.priority}`;
            
    });

  }

  const selectTask = document.querySelectorAll('.task-info');
  selectTask.forEach(task => {
    task.addEventListener('click', viewTask);
  })

};

export { displayTask, contentDiv, taskHeaderName, taskList };