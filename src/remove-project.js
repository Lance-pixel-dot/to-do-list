import { contentDiv, taskHeaderName, taskList, displayTask } from "./display-task";
import { viewTaskToday } from "./today-task";
import { viewUpcomingTask } from "./upcoming-task";
import { viewOverdueTask } from "./overdue-task";
import { displayTaskOnProject } from "./project-task";
import { defaultProject } from ".";
import { displayProject, projectSelect } from "./setup-project";

function deleteProject(projectName){

    const projectContainer = document.querySelector('.project-container');

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    const getUserProject = JSON.parse(localStorage.getItem('userProject'));

    contentDiv.textContent = "";
    taskList.textContent = "";
    projectContainer.textContent = "";
    projectSelect.textContent = "";

    const newArray = [];

    if(getLocalStore != null){

        getLocalStore.forEach(e => {
            const getTaskProject = e.projectName;

            const index = getLocalStore.indexOf(e);

            if(getTaskProject != projectName){
                newArray.push(getLocalStore[index]);
            }

        })
    }

    getUserProject.forEach(e => {
        const index = getUserProject.indexOf(e);

        if(e.name == projectName){
            getUserProject.splice(index, 1);
            localStorage.setItem('userProject', JSON.stringify(getUserProject));
        }

    })

    displayProject(defaultProject.name);

    getUserProject.forEach(e => {
        displayProject(e.name);
    })

    localStorage.setItem('userTask', JSON.stringify(newArray));

    if(taskHeaderName.textContent == 'Today'){
        viewTaskToday();
    }else if(taskHeaderName.textContent == 'Upcoming'){
        viewUpcomingTask();
    }else if(taskHeaderName.textContent == 'Overdue'){
        viewOverdueTask();
    }else if(taskHeaderName.textContent == 'All Tasks' && getLocalStore != null){
        displayTask(getLocalStore);
    }else if(projectName != taskHeaderName.textContent){
        displayTaskOnProject(taskHeaderName.textContent);
    }else{
        taskHeaderName.textContent = 'All Tasks';
        displayTask(newArray);
    }

}

export { deleteProject };