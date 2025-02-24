import { taskArr } from "./create-task";
import { formatDate, formatTime, isTaskOnQueue } from "./date-time-format";
// import { setLocalStorage } from "./local-storage";

const contentDiv = document.querySelector('#content');

function displayTask(){
    
    const taskDetails = document.createElement('p');

    taskArr.forEach(e => {

        const getTimeAndDate = `${e.dueDate} ${e.time}`

        console.log(taskArr);

        contentDiv.appendChild(taskDetails);

        taskDetails.textContent = `${e.title}, ${e.description}, ${formatDate(getTimeAndDate)}, ${formatTime(getTimeAndDate)}, ${e.priority}, ${e.repeat}`;

        isTaskOnQueue(formatDate(getTimeAndDate), formatTime(getTimeAndDate));
    });

};

// function displayLocalTask(arrayData){

//     taskArr.forEach(e => {

//         const taskDetails = document.createElement('p');

//         const getTimeAndDate = `${e.dueDate} ${e.time}`

//         console.log(taskArr);

//         contentDiv.appendChild(taskDetails);

//         taskDetails.textContent = `${e.title}, ${e.description}, ${formatDate(getTimeAndDate)}, ${formatTime(getTimeAndDate)}, ${e.priority}, ${e.repeat}`;

//         isTaskOnQueue(formatDate(getTimeAndDate), formatTime(getTimeAndDate));
//     });

// };

export { displayTask };