import "./styles.css";
import { addTaskButton } from "./create-task";
import { displayLocalStorage } from "./web-storage";
import { displayTask } from "./display-task";

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

displayLocalStorage();

export { Task };

//list of tasks:
//use date-fns methods/functions to make conditions on date and time if the task is due or overdue. (can be improved)
//make sure multiple task can appear in the DOM. (can be improved)
//use local storage API. (can be improved)
//Start designing.
//time format should be on a different module. (can be improved)
//make notification on tasks on due on the DOM.
//edit tasks.(make sure the submit button behaves differently between the create-task.js module and edit-task.js module)