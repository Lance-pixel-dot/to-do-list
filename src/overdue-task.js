import { displayTask, contentDiv, taskHeaderName } from "./display-task";
import { differenceInCalendarDays } from "date-fns";

function viewOverdueTask(){

    taskHeaderName.textContent = "Overdue";

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    contentDiv.textContent = "";

    getLocalStore.forEach(e => {
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

export { viewOverdueTask };