import "./styles.css";
import { addTaskButton } from "./create-task";
import { displayLocalStorage } from "./web-storage";
import { viewTaskToday } from "./today-task";
import { viewUpcomingTask } from "./upcoming-task";
import { contentDiv } from "./display-task";

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

const inboxButton = document.querySelector('.all-task-button').addEventListener('click', () => {
    contentDiv.textContent = "";
    displayLocalStorage();
})

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
//organize task based on upcoming and today tasks. (fix when on editing or deleting elements on today task section and upcoming task section, make sure the element selected is still the same index so it doesn't cause issues for not selecting the wrong index)