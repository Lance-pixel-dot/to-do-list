const viewTaskTitle = document.querySelector('.view-task-title');
const viewTaskDescription = document.querySelector('.view-task-description');
const viewTaskDueDate = document.querySelector('.view-task-due-date');
const viewPriority = document.querySelector('#view-priority');
const dialog = document.querySelector('.view-task');
const closeButton = document.querySelector('.close-dialog-view');

function viewTask(){
    
    const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement);

    console.log(index);

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    const getTask = getLocalStore[index];

    console.log(getTask);

    viewTaskTitle.value = getTask.title;
    viewTaskDescription.value = getTask.description;
    viewTaskDueDate.value = getTask.dueDate;
    // taskTimeInput.value = getTask.time;
    viewPriority.value = getTask.priority;
    // taskRepeatInput.value = getTask.repeat;
    // projectNameInput.value = getTask.projectName;

    dialog.showModal();
}

closeButton.addEventListener('click', () => {
    dialog.close();
})

export { viewTask };