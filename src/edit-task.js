import { submitTaskButton, cancelButton, taskTitleInput, taskDescriptionInput, taskDueDateInput, taskTimeInput, taskPriorityInput, taskRepeatInput, dialog } from "./create-task";
import { contentDiv, displayTask } from "./display-task";

function editTask(){

    submitTaskButton.className = 'save-task';
    submitTaskButton.textContent = 'Save';

    const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement) - 1;
    // const index = this.parentElement.getAttribute('index');

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

    const parent = this.parentElement;

    const children = parent.children;

    const selectChildrenParagraph = children.item(0);
    console.log(selectChildrenParagraph);

    submitTaskButton.addEventListener('click', () => {

        if(submitTaskButton.className == 'save-task'){
            getTask.title = taskTitleInput.value
            getTask.description = taskDescriptionInput.value
            getTask.dueDate = taskDueDateInput.value
            getTask.time = taskTimeInput.value
            getTask.priority = taskPriorityInput.value
            getTask.repeat = taskRepeatInput.value

            console.log(getTask);

            getLocalStore.splice(index, 1, getTask);

            console.log(getLocalStore);

            localStorage.setItem("userTask", JSON.stringify(getLocalStore));

            contentDiv.textContent = "";

            displayTask(getLocalStore);
        }
    })
}


export { editTask };