import { taskArr } from "./create-task";
import { format, toDate, isSameDay } from 'date-fns';

const contentDiv = document.querySelector('#content');

function displayTask(){
    taskArr.forEach(e => {
        console.log(e);

        // contentDiv.textContent = `${e.title}, ${e.description}, ${e.dueDate}, ${e.time}, ${e.priority}, ${e.repeat}`;

        // contentDiv.textContent = `Date:${e.dueDate}, Time:${e.time} | Formatted Date:${format(new Date(), "M/d/yyyy")}, Formatted Time:${format(new Date(), "h:mm bbb")}`;

        const getTimeAndDate = `${e.dueDate} ${e.time}`
        const formattedDate = format(toDate(getTimeAndDate), "M/d/yyyy");
        const formattedTime = format(toDate(getTimeAndDate), "h:mm bbb");

        contentDiv.textContent = `Date:${e.dueDate}, Time:${e.time} | Formatted Date:${formattedDate}, Formatted Time:${formattedTime}`;

        const dateResult = isSameDay(formattedDate, new Date());

        if(dateResult == true && formattedTime == format(Date(),"h:mm bbb")){
            console.log("ding ding time to do your task!");
        }else{
            console.log("wait");
        }
    })
}
export { displayTask };