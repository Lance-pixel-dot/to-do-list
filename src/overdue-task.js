import { displayTask, contentDiv, taskHeaderName, taskList } from "./display-task";
import { differenceInCalendarDays } from "date-fns";

const overdueSpan = document.createElement('span');

function viewOverdueTask(){

    taskHeaderName.textContent = "Overdue";

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    contentDiv.textContent = "";
    taskList.textContent = "";

    overdueSpan.textContent = "the following tasks are overdue!"

    getLocalStore.forEach(e => {

        // contentDiv.appendChild(overdueSpan);

        const getDate = e.dueDate;

        const attributeName = 'style';
        const attributeValue = 'display: none';

        const index = getLocalStore.indexOf(e);
        const getTaskArray = [];
        getTaskArray.push(getLocalStore[index]);   

        const dateResult = differenceInCalendarDays(Date(), getDate);
        // const hourLimit = differenceInHours(Date(), getTimeAndDate);

        if(dateResult < 0){
            displayTask(getTaskArray, attributeName, attributeValue);
        }else if(dateResult > 0){
            displayTask(getTaskArray);
        }

    })

}

export { viewOverdueTask, overdueSpan };