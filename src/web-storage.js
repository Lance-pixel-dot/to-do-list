import { displayTask } from "./display-task";

function storeTask(task){

    localStorage.setItem(localStorage.length, JSON.stringify(task));
    // const key = localStorage.key(localStorage.length);
    displayTask(task, localStorage.length);

}

function displayTaskOnLoad(){

    const taskKeyArray = [];

    for(let i = 0; i < localStorage.length; i++){

        const key = localStorage.key(i);

        taskKeyArray.push(key);

        taskKeyArray.sort((function(a, b){return a - b}));
    }

    for(let i = 0; i < localStorage.length; i++){
        const getLocalStore = JSON.parse(localStorage.getItem(taskKeyArray[i]));

        console.log(taskKeyArray);

        if(localStorage.length != 0){
            displayTask(getLocalStore, taskKeyArray[i]);
        }
    }

}

export { storeTask, displayTaskOnLoad };