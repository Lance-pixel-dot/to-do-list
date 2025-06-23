import "./styles.css";
import "./reset.css";
import { addTaskButton } from "./create-task";
import { displayLocalStorage } from "./web-storage";
import { viewTaskToday } from "./today-task";
import { viewUpcomingTask } from "./upcoming-task";
import { taskHeaderName } from "./display-task";
import { displayCompleteTask } from "./complete-task";
import { viewOverdueTask, overdueSpan } from "./overdue-task";
import { displayProject } from "./setup-project";
import { newProjectButton } from "./project-task";

class Task {

    constructor(title, description, dueDate, priority, projectName){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
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

if(getLocalStore != null){
    getLocalStore.forEach(e => {
        displayProject(e.name);
    })
}

const todayTaskButton = document.querySelector('.today-button').addEventListener('click', () => {
    const getTasks = JSON.parse(localStorage.getItem("userTask"));
    if(getTasks != null){
        overdueSpan.textContent = "";
        viewTaskToday();
    }
})

const upcomingTaskButton = document.querySelector('.upcoming-button').addEventListener('click', () => {
    const getTasks = JSON.parse(localStorage.getItem("userTask"));
    if(getTasks != null){
        overdueSpan.textContent = "";
        viewUpcomingTask();
    }
})

const allTaskButton = document.querySelector('.all-task-button').addEventListener('click', () => {
    const getTasks = JSON.parse(localStorage.getItem("userTask"));
    if(getTasks != null){
        overdueSpan.textContent = "";
        taskHeaderName.textContent = 'All Tasks';
        displayLocalStorage();
    }
})

const completedTaskButton = document.querySelector('.complete-button').addEventListener('click', () => {
    const getCompletedTask = JSON.parse(localStorage.getItem("completedTask"));
    if(getCompletedTask != null){
        overdueSpan.textContent = "";
        displayCompleteTask();
    }
})

const overdueButton = document.querySelector('.overdue-button').addEventListener('click', () => {
    const getTasks = JSON.parse(localStorage.getItem("userTask"));
    if(getTasks != null){
        viewOverdueTask();
    }
})

taskHeaderName.textContent = 'All Tasks';
displayLocalStorage();

export { Task, Project, defaultProject };