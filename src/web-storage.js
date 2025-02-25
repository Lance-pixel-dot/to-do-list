import { displayTask } from "./display-task";

function setLocalStorage(data){
    
    const taskArray = [];

    taskArray.push(data);

    const getLocalData = JSON.parse(localStorage.getItem('userTask'));

    if(localStorage.length != 0){

        console.log(getLocalData);
        getLocalData.push(data);
        localStorage.setItem("userTask", JSON.stringify(getLocalData));
        displayLocalStorage();

    }else{

        localStorage.setItem("userTask", JSON.stringify(taskArray));
        displayLocalStorage();

    }

}

function displayLocalStorage(){

    const getLocalData = JSON.parse(localStorage.getItem('userTask'));

    if(localStorage.length != 0){
        displayTask(getLocalData);
    }

}

export { setLocalStorage, displayLocalStorage };