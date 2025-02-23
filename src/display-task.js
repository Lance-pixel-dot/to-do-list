import { taskArr } from "./create-task";

const contentDiv = document.querySelector('#content');

function displayTask(){
    taskArr.forEach(e => {
        console.log(e);

        contentDiv.textContent = `${e.title}, ${e.description}, ${e.dueDate}, ${e.time}, ${e.priority}, ${e.repeat}`;
    })
}

export { displayTask };