import { contentDiv, displayTask, taskHeaderName } from "./display-task";
import { viewTaskToday } from "./today-task";
import { viewUpcomingTask } from "./upcoming-task";

function storeTask(task){

    if(localStorage.length != 0){

        const getLocalStore = JSON.parse(localStorage.getItem('userTask'));
        getLocalStore.push(task);
        localStorage.setItem("userTask", JSON.stringify(getLocalStore));
        displayLocalStorage();

    }else{

        const taskArray = [];
        taskArray.push(task);
        localStorage.setItem("userTask", JSON.stringify(taskArray));
        displayLocalStorage();

    }

}

function displayLocalStorage(){

    if(localStorage.length != 0){

        if(taskHeaderName.textContent == 'Today'){
            viewTaskToday();
        }else if(taskHeaderName.textContent == 'Upcoming'){
            viewUpcomingTask();
        }else if(taskHeaderName.textContent == 'Completed Tasks'){
            const getLocalStore = JSON.parse(localStorage.getItem("completedTask"));
            contentDiv.textContent = "";
            displayTask(getLocalStore);
        }else{
            const getLocalStore = JSON.parse(localStorage.getItem("userTask"));
            contentDiv.textContent = "";
            displayTask(getLocalStore);
        }

    }

}

export { storeTask, displayLocalStorage };