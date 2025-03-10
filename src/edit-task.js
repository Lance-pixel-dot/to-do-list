import { submitTaskButton, cancelButton, taskTitleInput, taskDescriptionInput, taskDueDateInput, taskTimeInput, taskPriorityInput, taskRepeatInput, dialog } from "./create-task";
import { contentDiv, displayTask, taskHeaderName } from "./display-task";
import { viewTaskToday } from "./today-task";
import { viewUpcomingTask } from "./upcoming-task";

function editTask(){

    submitTaskButton.className = 'save-task';
    submitTaskButton.textContent = 'Save';

    const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement) - 1;

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    const getTask = getLocalStore[index];

    console.log(index);
    
    console.log(getTask);

    taskTitleInput.value = getTask.title;
    taskDescriptionInput.value = getTask.description;
    taskDueDateInput.value = getTask.dueDate;
    taskTimeInput.value = getTask.time;
    taskPriorityInput.value = getTask.priority;
    taskRepeatInput.value = getTask.repeat;

    dialog.showModal();

    submitTaskButton.addEventListener('click', () => {

        if(submitTaskButton.className == 'save-task'){
            getTask.title = taskTitleInput.value
            getTask.description = taskDescriptionInput.value
            getTask.dueDate = taskDueDateInput.value
            getTask.time = taskTimeInput.value
            getTask.priority = taskPriorityInput.value
            getTask.repeat = taskRepeatInput.value

            getLocalStore.splice(index, 1, getTask);

            localStorage.setItem("userTask", JSON.stringify(getLocalStore));

            contentDiv.textContent = "";

            if(taskHeaderName.textContent == 'Today'){
                viewTaskToday();
            }else if(taskHeaderName.textContent == 'Upcoming'){
                viewUpcomingTask();
            }else{
                displayTask(getLocalStore);
            }
        }
    })
}


export { editTask };