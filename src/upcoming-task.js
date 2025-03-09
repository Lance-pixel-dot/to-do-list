import { displayTask, contentDiv } from "./display-task";
import { differenceInCalendarDays } from "date-fns";

function viewUpcomingTask(){

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    contentDiv.textContent = "";
    const createUpcomingTaskHeader = document.createElement('h2');
    createUpcomingTaskHeader.textContent = 'Upcoming';
    contentDiv.appendChild(createUpcomingTaskHeader);

    getLocalStore.forEach(e => {
        const getDate = e.dueDate;

        const index = getLocalStore.indexOf(e);

        const dateResult = differenceInCalendarDays(Date(), getDate);
        // const hourLimit = differenceInHours(Date(), getTimeAndDate);

        const getTaskArray = [];

        if(dateResult < 0){
            getTaskArray.push(getLocalStore[index]);
            displayTask(getTaskArray);
        }

    })

}

export { viewUpcomingTask };