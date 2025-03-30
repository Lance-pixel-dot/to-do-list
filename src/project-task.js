import { displayTask, contentDiv, taskHeaderName, taskList } from "./display-task";

function displayTaskOnProject(projectName){

    console.log(projectName);

    taskHeaderName.textContent = projectName;

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    contentDiv.textContent = "";
    taskList.textContent = "";

    getLocalStore.forEach(e => {
        const getTaskProject = e.projectName;

        const attributeName = 'style';
        const attributeValue = 'display: none';

        const index = getLocalStore.indexOf(e);
        const getTaskArray = [];
        getTaskArray.push(getLocalStore[index]);   

        if(getTaskProject != projectName){
            displayTask(getTaskArray, attributeName, attributeValue);
        }else if(getTaskProject == projectName){
            displayTask(getTaskArray);
        }

    })

}

export { displayTaskOnProject };