import { submitTaskButton, cancelButton, taskTitleInput, taskDescriptionInput, taskDueDateInput, taskPriorityInput, projectNameInput, dialog, taskForm} from "./create-task";
import { contentDiv, displayTask, taskHeaderName, taskList } from "./display-task";
import { viewTaskToday } from "./today-task";
import { viewUpcomingTask } from "./upcoming-task";
import { viewOverdueTask } from "./overdue-task";
import { displayTaskOnProject } from "./project-task";

function editTask(){

    submitTaskButton.className = 'save-task';
    submitTaskButton.textContent = 'Save';

    const index = [...this.parentElement.parentElement.parentElement.children].indexOf(this.parentElement.parentElement);

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    const getTask = getLocalStore[index];

    taskTitleInput.value = getTask.title;
    taskDescriptionInput.value = getTask.description;
    taskDueDateInput.value = getTask.dueDate;
    taskPriorityInput.value = getTask.priority;
    projectNameInput.value = getTask.projectName;

    dialog.showModal();

    taskForm.addEventListener('submit', e => {

        e.preventDefault();

        if(submitTaskButton.className == 'save-task'){
            getTask.title = taskTitleInput.value;
            getTask.description = taskDescriptionInput.value;
            getTask.dueDate = taskDueDateInput.value;
            getTask.priority = taskPriorityInput.value;
            getTask.projectName = projectNameInput.value;

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
            }else if(taskHeaderName.textContent == 'All Tasks'){
                displayTask(getLocalStore);
            }else{
                displayTaskOnProject(taskHeaderName.textContent);
            }
        }
    })
}


export { editTask };