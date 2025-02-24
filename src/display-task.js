import { taskArr } from "./create-task";
import { format, toDate, isSameDay } from 'date-fns';

const contentDiv = document.querySelector('#content');

//fix task duplication on DOM
function displayTask(){
    
    const taskDetails = document.createElement('p');

    taskArr.forEach(e => {

        const getTimeAndDate = `${e.dueDate} ${e.time}`
        const formattedDate = format(toDate(getTimeAndDate), "M/d/yyyy");
        const formattedTime = format(toDate(getTimeAndDate), "h:mm bbb");

        console.log(e);
        console.log(taskArr);

        contentDiv.appendChild(taskDetails);

        taskDetails.textContent = `${e.title}, ${e.description}, ${formattedDate}, ${formattedTime}, ${e.priority}, ${e.repeat}`;

        const dateResult = isSameDay(formattedDate, new Date());

        if(dateResult == true && formattedTime == format(Date(),"h:mm bbb")){
            console.log("ding ding time to do your task!");
        }else{
            console.log("wait");
        }
    })

}
export { displayTask };