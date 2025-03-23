import { displayTask, contentDiv, taskHeaderName, taskList } from "./display-task";
import { isSameDay } from "date-fns";

function viewTaskToday(){

    taskHeaderName.textContent = "Today";

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    contentDiv.textContent = "";
    taskList.textContent = "";

    getLocalStore.forEach(e => {
        const getDate = e.dueDate;

        const attributeName = 'style';
        const attributeValue = 'display: none';

        const index = getLocalStore.indexOf(e);
        const getTaskArray = [];
        getTaskArray.push(getLocalStore[index]);   

        const dateResult = isSameDay(getDate, new Date());
        // const hourLimit = differenceInHours(Date(), getTimeAndDate); 

        if(dateResult != true){
            displayTask(getTaskArray, attributeName, attributeValue);
        }else if(dateResult == true){
            displayTask(getTaskArray);
        }

    })

}

export { viewTaskToday };