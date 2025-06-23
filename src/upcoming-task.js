import { displayTask, contentDiv, taskHeaderName, taskList } from "./display-task";
import { differenceInCalendarDays } from "date-fns";

function viewUpcomingTask(){

    taskHeaderName.textContent = "Upcoming";

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

        const dateResult = differenceInCalendarDays(Date(), getDate);

        if(dateResult >= 0){
            displayTask(getTaskArray, attributeName, attributeValue);
        }else{
            displayTask(getTaskArray);
        }

    })

}

export { viewUpcomingTask };