import { displayTask } from "./display-task";
import { contentDiv } from "./display-task";
import { taskHeaderName } from "./display-task";

function completeTask(){
    
    const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement) - 1;

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    getLocalStore.forEach(e => {

        const indexOfTask = getLocalStore.indexOf(e);
        const getTaskArray = [];
        getTaskArray.push(getLocalStore[indexOfTask]);   

        if(index == indexOfTask){

            if(localStorage.length == 1){
                localStorage.setItem("completedTask", JSON.stringify(getTaskArray));
            }else{
                const getLocalCompletedTask = JSON.parse(localStorage.getItem('completedTask'));
                getLocalCompletedTask.push(...getTaskArray);
                localStorage.setItem("completedTask", JSON.stringify(getLocalCompletedTask));
            }

            const removeParent = contentDiv.removeChild(contentDiv.children[index + 1]);
            getLocalStore.splice(index, 1);
            localStorage.setItem("userTask", JSON.stringify(getLocalStore));

        }

    })
}

function displayCompleteTask(){

    contentDiv.textContent = "";

    taskHeaderName.textContent = "Completed Tasks";

    const getLocalCompletedTask = JSON.parse(localStorage.getItem('completedTask'));

    displayTask(getLocalCompletedTask);
}

export { completeTask, displayCompleteTask }