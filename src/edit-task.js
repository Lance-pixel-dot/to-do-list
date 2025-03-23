import { submitTaskButton, cancelButton, taskTitleInput, taskDescriptionInput, taskDueDateInput, taskPriorityInput, dialog, taskForm} from "./create-task";
import { contentDiv, displayTask, taskHeaderName, taskList } from "./display-task";
import { viewTaskToday } from "./today-task";
import { viewUpcomingTask } from "./upcoming-task";
import { viewOverdueTask } from "./overdue-task";

function editTask(){

    submitTaskButton.className = 'save-task';
    submitTaskButton.textContent = 'Save';

    const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement);

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    const getTask = getLocalStore[index];

    console.log(index);
    
    console.log(getTask);

    taskTitleInput.value = getTask.title;
    taskDescriptionInput.value = getTask.description;
    taskDueDateInput.value = getTask.dueDate;
    // taskTimeInput.value = getTask.time;
    taskPriorityInput.value = getTask.priority;
    // taskRepeatInput.value = getTask.repeat;

    dialog.showModal();

    taskForm.addEventListener('submit', e => {

        e.preventDefault();

        if(submitTaskButton.className == 'save-task'){
            getTask.title = taskTitleInput.value
            getTask.description = taskDescriptionInput.value
            getTask.dueDate = taskDueDateInput.value
            // getTask.time = taskTimeInput.value
            getTask.priority = taskPriorityInput.value
            // getTask.repeat = taskRepeatInput.value

            getLocalStore.splice(index, 1, getTask);

            localStorage.setItem("userTask", JSON.stringify(getLocalStore));

            contentDiv.textContent = "";
            taskList.textContent = "";

            if(taskHeaderName.textContent == 'Today'){
                viewTaskToday();
            }else if(taskHeaderName.textContent == 'Upcoming'){
                viewUpcomingTask();
            }else if(taskHeaderName.textContent == 'Overdue'){
                viewOverdueTask();
            }else{
                displayTask(getLocalStore);
            }
        }
    })
}


export { editTask };