import { contentDiv, displayTask, taskHeaderName, taskList } from "./display-task";
import { viewTaskToday } from "./today-task";
import { viewUpcomingTask } from "./upcoming-task";
import { viewOverdueTask } from "./overdue-task";
import { displayTaskOnProject } from "./project-task";

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

function storeProject(project){

    const getLocalStore = JSON.parse(localStorage.getItem('userProject'));

    if(getLocalStore != null){

        getLocalStore.push(project);
        localStorage.setItem("userProject", JSON.stringify(getLocalStore));

    }else{

        const projectArray = [];
        projectArray.push(project);
        localStorage.setItem("userProject", JSON.stringify(projectArray));

    }

}

function displayLocalStorage(){

    if(localStorage.length > 0){

        if(taskHeaderName.textContent == 'Today'){
            viewTaskToday();
        }else if(taskHeaderName.textContent == 'Upcoming'){
            viewUpcomingTask();
        }else if(taskHeaderName.textContent == 'Completed Tasks'){
            const getLocalStore = JSON.parse(localStorage.getItem("completedTask"));
            contentDiv.textContent = "";
            displayTask(getLocalStore);
        }else if(taskHeaderName.textContent == 'Overdue'){
            viewOverdueTask();
        }else if(taskHeaderName.textContent == 'All Tasks'){
            const getLocalStore = JSON.parse(localStorage.getItem("userTask"));
            contentDiv.textContent = "";
            taskList.textContent = "";
            displayTask(getLocalStore);
        }else{
            displayTaskOnProject(taskHeaderName.textContent);
        }

    }

}

export { storeTask, displayLocalStorage, storeProject};