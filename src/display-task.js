import { formatDate } from "./date-format";
import { deleteTask } from "./remove-task";
import { editTask } from "./edit-task";
import { completeTask } from "./complete-task";
import { overdueSpan } from "./overdue-task";
import { viewTask } from "./view-task";
import svgOne from "./svg/pencil.svg";
import svgTwo from './svg/trash-can-outline.svg';
import svgThree from './svg/check-circle-outline.svg';

const contentDiv = document.querySelector('#content');
const taskHeaderName = document.createElement('h2');
const taskList = document.createElement('div'); 

function displayTask(task, customAttributeName, customAttributeValue){

  if(contentDiv.textContent != ""){

    const createTaskDetailsDiv = document.createElement('div');
    createTaskDetailsDiv.setAttribute('class', 'task-details-container');
    const createEditAndDeleteDiv = document.createElement('div');
    createEditAndDeleteDiv.setAttribute('class', 'invisible-svg');

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    taskContainer.setAttribute(customAttributeName, customAttributeValue);

    const taskDetails = document.createElement('p');
    taskDetails.setAttribute('class', 'task-info');

    const createDeleteButton = document.createElement('img');
    createDeleteButton.src = svgTwo;
    createDeleteButton.addEventListener('click', deleteTask);

    const createEditButton = document.createElement('img');
    createEditButton.src = svgOne;
    createEditButton.addEventListener('click', editTask);

    const createCompleteButton = document.createElement('img');
    createCompleteButton.src = svgThree;
    createCompleteButton.setAttribute('class', 'check-mark');
    createCompleteButton.addEventListener('click', completeTask);

    task.forEach(e => {

      createTaskDetailsDiv.appendChild(taskDetails);
      taskContainer.appendChild(createTaskDetailsDiv)
      taskList.appendChild(taskContainer);

      if(taskHeaderName.textContent != 'Completed Tasks'){
        createEditAndDeleteDiv.appendChild(createEditButton);
        createEditAndDeleteDiv.appendChild(createDeleteButton);
        taskContainer.appendChild(createCompleteButton);
        taskContainer.appendChild(createEditAndDeleteDiv);
      }  

      taskDetails.textContent = `Title: ${e.title}, Date: ${formatDate(e.dueDate)}, Priority: ${e.priority}`;
    
    });

  }else if(contentDiv.textContent == ""){
   
    contentDiv.appendChild(taskHeaderName);
    contentDiv.appendChild(overdueSpan);
    contentDiv.appendChild(taskList);
    
    task.forEach(e => {

      const createTaskDetailsDiv = document.createElement('div');
      createTaskDetailsDiv.setAttribute('class', 'task-details-container');
      const createEditAndDeleteDiv = document.createElement('div');
      createEditAndDeleteDiv.setAttribute('class', 'invisible-svg');

      const taskContainer = document.createElement('div');
      taskContainer.className = 'task-container';
      taskContainer.setAttribute(customAttributeName, customAttributeValue);
            
      const taskDetails = document.createElement('p');
      taskDetails.setAttribute('class', 'task-info');
            
      const createDeleteButton = document.createElement('img');
      createDeleteButton.src = svgTwo;
      createDeleteButton.addEventListener('click', deleteTask);

      const createEditButton = document.createElement('img');
      createEditButton.src = svgOne;
      createEditButton.addEventListener('click', editTask);

      const createCompleteButton = document.createElement('img');
      createCompleteButton.src = svgThree;
      createCompleteButton.setAttribute('class', 'check-mark');
      createCompleteButton.addEventListener('click', completeTask);

      createTaskDetailsDiv.appendChild(taskDetails);
      taskContainer.appendChild(createTaskDetailsDiv)
      taskList.appendChild(taskContainer);

      if(taskHeaderName.textContent != 'Completed Tasks'){
        createEditAndDeleteDiv.appendChild(createEditButton);
        createEditAndDeleteDiv.appendChild(createDeleteButton);
        taskContainer.appendChild(createCompleteButton);
        taskContainer.appendChild(createEditAndDeleteDiv);
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