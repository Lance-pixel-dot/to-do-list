import { displayTask } from "./display-task";
import { contentDiv, taskList } from "./display-task";
import { taskHeaderName } from "./display-task";

function completeTask(){
    
    const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement);

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    getLocalStore.forEach(e => {

        const indexOfTask = getLocalStore.indexOf(e);
        const getTaskArray = [];
        getTaskArray.push(getLocalStore[indexOfTask]);   

        if(index == indexOfTask){
            const getLocalCompletedTask = JSON.parse(localStorage.getItem('completedTask'));

            if(getLocalCompletedTask == null){
                localStorage.setItem("completedTask", JSON.stringify(getTaskArray));
            }else{
                getLocalCompletedTask.push(...getTaskArray);
                localStorage.setItem("completedTask", JSON.stringify(getLocalCompletedTask));
            }

            const removeParent = taskList.removeChild(taskList.children[index]);
            getLocalStore.splice(index, 1);
            localStorage.setItem("userTask", JSON.stringify(getLocalStore));

        }

    })
}

function displayCompleteTask(){

    contentDiv.textContent = "";
    taskList.textContent = "";

    taskHeaderName.textContent = "Completed Tasks";

    const getLocalCompletedTask = JSON.parse(localStorage.getItem('completedTask'));

    displayTask(getLocalCompletedTask);
}

export { completeTask, displayCompleteTask }