import { displayTask } from "./display-task";

function storeTask(task){

    const taskArray = [];

    taskArray.push(task);

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    if(localStorage.length != 0){

        console.log(getLocalStore);
        getLocalStore.push(task);
        localStorage.setItem("userTask", JSON.stringify(getLocalStore));
        displayLocalStorage();

    }else{

        localStorage.setItem("userTask", JSON.stringify(taskArray));
        displayLocalStorage();

    }

}

function displayLocalStorage(){

    const getLocalStore = JSON.parse(localStorage.getItem("userTask"));

    if(localStorage.length != 0){
        displayTask(getLocalStore);
    }

}

export { storeTask, displayLocalStorage };