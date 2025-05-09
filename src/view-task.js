import { taskHeaderName } from "./display-task";

const viewTaskTitle = document.querySelector('.view-task-title');
const viewTaskDescription = document.querySelector('.view-task-description');
const viewTaskDueDate = document.querySelector('.view-task-due-date');
const viewPriority = document.querySelector('#view-priority');
const dialog = document.querySelector('.view-task');
const closeButton = document.querySelector('.close-dialog-view');

function viewTask(){
    
    const index = [...this.parentElement.parentElement.parentElement.children].indexOf(this.parentElement.parentElement);

    if(taskHeaderName.textContent == 'Completed Tasks'){
        const getLocalStore = JSON.parse(localStorage.getItem('completedTask'));
        const getTask = getLocalStore[index];

        viewTaskTitle.value = getTask.title;
        viewTaskDescription.value = getTask.description;
        viewTaskDueDate.value = getTask.dueDate;
        viewPriority.value = getTask.priority;
    
        dialog.showModal();
    }else{
        const getLocalStore = JSON.parse(localStorage.getItem('userTask'));
        const getTask = getLocalStore[index];

        viewTaskTitle.value = getTask.title;
        viewTaskDescription.value = getTask.description;
        viewTaskDueDate.value = getTask.dueDate;
        viewPriority.value = getTask.priority;
    
        dialog.showModal();
    }
}

closeButton.addEventListener('click', () => {
    dialog.close();
})

export { viewTask };