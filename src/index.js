import "./styles.css";
import { addTaskButton } from "./create-task";
import { displayLocalStorage } from "./web-storage";
import { viewTaskToday } from "./today-task";
import { viewUpcomingTask } from "./upcoming-task";
import { taskHeaderName } from "./display-task";
import { displayCompleteTask } from "./complete-task";
import { viewOverdueTask, overdueSpan } from "./overdue-task";
// import { taskTitleInput, taskDescriptionInput, taskDueDateInput, taskPriorityInput } from "./create-task";

class Task {

    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        // this.time = time;
        this.priority = priority;
        // this.repeat = repeat;
        // this.taskNumber = taskNumber;
    }

}

const todayTaskButton = document.querySelector('.today-button').addEventListener('click', () => {
    overdueSpan.textContent = "";
    viewTaskToday();
})

const upcomingTaskButton = document.querySelector('.upcoming-button').addEventListener('click', () => {
    overdueSpan.textContent = "";
    viewUpcomingTask();
})

const allTaskButton = document.querySelector('.all-task-button').addEventListener('click', () => {
    overdueSpan.textContent = "";
    taskHeaderName.textContent = 'All Tasks';
    displayLocalStorage();
})

const completedTaskButton = document.querySelector('.complete-button').addEventListener('click', () => {
    overdueSpan.textContent = "";
    displayCompleteTask();
})

const overdueButton = document.querySelector('.overdue-button').addEventListener('click', () => {
    viewOverdueTask();
})

taskHeaderName.textContent = 'All Tasks';
displayLocalStorage();

export { Task };

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
//put all tasks under one div.
//make priorities work.
//make projects work.
//make sections under projects work.
//make time and repeat work.

//notes
//every time a task is completed it will be in the new array for incase you want to re-use that task you will need to "push" it back at the end or last index of active userTask array therefore it will have a new date for that task to be completed.