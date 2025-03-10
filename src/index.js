import "./styles.css";
import { addTaskButton } from "./create-task";
import { displayLocalStorage } from "./web-storage";
import { viewTaskToday } from "./today-task";
import { viewUpcomingTask } from "./upcoming-task";
import { taskHeaderName } from "./display-task";

class Task {

    constructor(title, description, dueDate, time, priority, repeat, taskNumber){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.time = time;
        this.priority = priority;
        this.repeat = repeat;
        this.taskNumber = taskNumber;
    }

}

const todayTaskButton = document.querySelector('.today-button').addEventListener('click', () => {
    viewTaskToday();
})

const upcomingTaskButton = document.querySelector('.upcoming-button').addEventListener('click', () => {
    viewUpcomingTask();
})

const allTaskButton = document.querySelector('.all-task-button').addEventListener('click', () => {
    taskHeaderName.textContent = 'All Tasks';
    displayLocalStorage();
})

taskHeaderName.textContent = 'All Tasks';
displayLocalStorage();

export { Task };

//list of tasks:
//use date-fns methods/functions to make conditions on date and time if the task is due or overdue. (can be improved)
//make sure multiple task can appear in the DOM. (can be improved)
//use local storage API. (can be improved)
//Start designing.
//time format should be on a different module. (can be improved)
//make notification on tasks on due on the DOM.
//edit tasks.(can be improved)