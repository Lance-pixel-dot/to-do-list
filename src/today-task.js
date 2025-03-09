import { displayTask, contentDiv } from "./display-task";
import { isSameDay } from "date-fns";

function viewTaskToday(){

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    contentDiv.textContent = "";
    const createTodayTaskHeader = document.createElement('h2');
    createTodayTaskHeader.textContent = 'Today';
    contentDiv.appendChild(createTodayTaskHeader);

    getLocalStore.forEach(e => {
        const getDate = e.dueDate;

        const attributeName = 'style';
        const attributeValue = 'display: none';

        const index = getLocalStore.indexOf(e);
        const getTaskArray = [];
        getTaskArray.push(getLocalStore[index]);   

        console.log(getTaskArray);

        const dateResult = isSameDay(getDate, new Date());
        // const hourLimit = differenceInHours(Date(), getTimeAndDate); 

        if(dateResult != true){
            // displayTask(getTaskArray);
            displayTask(getTaskArray, attributeName, attributeValue);
        }

    })

}

export { viewTaskToday };