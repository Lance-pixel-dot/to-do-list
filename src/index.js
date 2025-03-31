import "./styles.css";
import { addTaskButton } from "./create-task";
import { displayLocalStorage } from "./web-storage";
import { viewTaskToday } from "./today-task";
import { viewUpcomingTask } from "./upcoming-task";
import { taskHeaderName } from "./display-task";
import { displayCompleteTask } from "./complete-task";
import { viewOverdueTask, overdueSpan } from "./overdue-task";
import { displayProject } from "./setup-project";
import { newProjectButton } from "./project-task";
// import { taskTitleInput, taskDescriptionInput, taskDueDateInput, taskPriorityInput } from "./create-task";

class Task {

    constructor(title, description, dueDate, priority, projectName){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        // this.time = time;
        this.priority = priority;
        // this.repeat = repeat;
        // this.taskNumber = taskNumber;
        this.projectName = projectName;
    }

}

class Project {

    constructor(name){
        this.name = name;
    }

}

const defaultProject = new Project("My Project");
displayProject(defaultProject.name);

const getLocalStore = JSON.parse(localStorage.getItem('userProject'));

getLocalStore.forEach(e => {
    displayProject(e.name);
})


const todayTaskButton = document.querySelector('.today-button').addEventListener('click', () => {
    if(localStorage.length > 0){
        overdueSpan.textContent = "";
        viewTaskToday();
    }
})

const upcomingTaskButton = document.querySelector('.upcoming-button').addEventListener('click', () => {
    if(localStorage.length > 0){
        overdueSpan.textContent = "";
        viewUpcomingTask();
    }
})

const allTaskButton = document.querySelector('.all-task-button').addEventListener('click', () => {
    if(localStorage.length > 0){
        overdueSpan.textContent = "";
        taskHeaderName.textContent = 'All Tasks';
        displayLocalStorage();
    }
})

const completedTaskButton = document.querySelector('.complete-button').addEventListener('click', () => {
    if(localStorage.length > 1){
        overdueSpan.textContent = "";
        displayCompleteTask();
    }
})

const overdueButton = document.querySelector('.overdue-button').addEventListener('click', () => {
    if(localStorage.length > 0){
        viewOverdueTask();
    }
})

taskHeaderName.textContent = 'All Tasks';
displayLocalStorage();

export { Task, Project };

//list of objectives:
//use date-fns methods/functions to make conditions on date and time if the task is due or overdue. (can be improved)
//make sure multiple task can appear in the DOM. (can be improved)
//use local storage API. (can be improved)
//Start designing.
//time format should be on a different module. (can be improved)
//make notification on tasks on due on the DOM. (If you can)
//edit tasks.(can be improved)
//make task complete. (can be improved)
//make overdue tasks work. (can be improved)
//fix when local storage is empty. (can be improved with better features while it is empty)
//make priorities work. (can be improved)
//make projects work.
    //make sure the projects are also stored in the local storage. (can be improved)
    //make when you delete a project the tasks under it should be also deleted.
    //add some more properties on project like symbols or color. (if you have time)
//make sections/sub projects under projects work. (if you can)
//make time work.
//make repeat work.

//notes
//every time a task is completed it will be in the new array for incase you want to re-use that task you will need to "push" it back at the end or last index of active userTask array therefore it will have a new date for that task to be completed.