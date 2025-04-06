import { displayTask, contentDiv, taskHeaderName, taskList } from "./display-task";

function displayTaskOnProject(projectName){

    taskHeaderName.textContent = projectName;

    contentDiv.textContent = "";
    taskList.textContent = "";

    if(localStorage.length > 1){

        const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

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

}

export { displayTaskOnProject };