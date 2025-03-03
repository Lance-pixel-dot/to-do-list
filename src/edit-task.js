import { cancelButton, taskTitleInput, taskDescriptionInput, taskDueDateInput, taskTimeInput, taskPriorityInput, taskRepeatInput, dialog } from "./create-task";
import { formatDate, formatTime } from "./date-time-format";

function editTask(){

    const saveButton = document.querySelector('.submit-task');
    saveButton.textContent = "Save Changes"

    const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement);

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    const getTask = getLocalStore[index];
    
    console.log(getTask);

    taskTitleInput.value = getTask.title;
    taskDescriptionInput.value = getTask.description;
    taskDueDateInput.value = getTask.dueDate;
    taskTimeInput.value = getTask.time;
    taskPriorityInput.value = getTask.priority;
    taskRepeatInput.value = getTask.repeat;

    dialog.showModal();

    const parent = this.parentElement;

    const children = parent.children;

    const selectChildrenParagraph = children.item(0);

    console.log(selectChildrenParagraph);

    saveButton.addEventListener('click', () => {
        const getTimeAndDate = `${taskDueDateInput.value} ${taskTimeInput.value}`

        selectChildrenParagraph.textContent = `Title: ${taskTitleInput.value}, Description: ${taskDescriptionInput.value}, Date: ${formatDate(getTimeAndDate)}, Time:${formatTime(getTimeAndDate)}, Priority: ${taskPriorityInput.value}, Repeat: ${taskRepeatInput.value}`;
    })

    // const taskContainer = document.createElement('div');
    // taskContainer.className = 'task-container';
        
    // const taskDetails = document.createElement('p');
        
    // const createDeleteButton = document.createElement('button');
    // createDeleteButton.textContent = "Remove task";
    // createDeleteButton.addEventListener('click', deleteTask);

    // const createEditButton = document.createElement('button');
    // createEditButton.textContent = "Edit Task";
    // createEditButton.addEventListener('click', editTask);
        
    // const getTimeAndDate = `${e.dueDate} ${e.time}`
        
    // contentDiv.appendChild(taskContainer);
    // taskContainer.appendChild(taskDetails);
    // taskContainer.appendChild(createEditButton);
    // taskContainer.appendChild(createDeleteButton);
        
    // taskDetails.textContent = `Title: ${e.title}, Description: ${e.description}, Date: ${formatDate(getTimeAndDate)}, Time:${formatTime(getTimeAndDate)}, Priority: ${e.priority}, Repeat: ${e.repeat}`;
        
    // isTaskOnQueue(formatDate(getTimeAndDate), formatTime(getTimeAndDate), getTimeAndDate);

}


export { editTask };