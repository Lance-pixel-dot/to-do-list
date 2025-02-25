import { formatDate, formatTime, isTaskOnQueue } from "./date-time-format";

const contentDiv = document.querySelector('#content');

function displayTask(data){

    if(contentDiv.textContent != ""){

        const taskDetails = document.createElement('p');

        data.forEach(e => {

            const getTimeAndDate = `${e.dueDate} ${e.time}`
    
            console.log(data);
    
            contentDiv.appendChild(taskDetails);
    
            taskDetails.textContent = `Title: ${e.title}, Description: ${e.description}, Date: ${formatDate(getTimeAndDate)}, Time: ${formatTime(getTimeAndDate)}, Priority: ${e.priority}, Repeat: ${e.repeat}`;
    
            isTaskOnQueue(formatDate(getTimeAndDate), formatTime(getTimeAndDate), getTimeAndDate);
        });

    }else if(contentDiv.textContent == ""){

        data.forEach(e => {

            const taskDetails = document.createElement('p');

            const getTimeAndDate = `${e.dueDate} ${e.time}`

            console.log(data);

            contentDiv.appendChild(taskDetails);

            taskDetails.textContent = `Title: ${e.title}, Description: ${e.description}, Date: ${formatDate(getTimeAndDate)}, Time: ${formatTime(getTimeAndDate)}, Priority: ${e.priority}, Repeat: ${e.repeat}`;

            isTaskOnQueue(formatDate(getTimeAndDate), formatTime(getTimeAndDate), getTimeAndDate);

        });

    }

};

export { displayTask };