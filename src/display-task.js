import { formatDate, formatTime, isTaskOnQueue } from "./date-time-format";

const contentDiv = document.querySelector('#content');

function displayTask(data){

    const taskContainer = document.createElement('div');
    const taskDetails = document.createElement('p');
    const createDeleteButton = document.createElement('button');

    createDeleteButton.textContent = "Remove task";

    const getTimeAndDate = `${data.dueDate} ${data.time}`
    
    console.log(data);

    contentDiv.appendChild(taskContainer);
    taskContainer.appendChild(taskDetails);
    taskContainer.appendChild(createDeleteButton);

    taskDetails.textContent = `Title: ${data.title}, Description: ${data.description}, Date: ${formatDate(getTimeAndDate)}, Time:${formatTime(getTimeAndDate)}, Priority: ${data.priority}, Repeat: ${data.repeat}`;
    
    isTaskOnQueue(formatDate(getTimeAndDate), formatTime(getTimeAndDate), getTimeAndDate);

};

export { displayTask };