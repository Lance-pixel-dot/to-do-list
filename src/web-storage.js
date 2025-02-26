import { displayTask } from "./display-task";

function storeData(data){

    localStorage.setItem("userTask" + localStorage.length, JSON.stringify(data));
    displayTask(data);

}

function displayDataOnLoad(){

    for(let i = 0; i < localStorage.length; i++){

        const getLocalData = JSON.parse(localStorage.getItem('userTask' + i));

        if(localStorage.length != 0){
            displayTask(getLocalData);
        }

    }

}

export { storeData, displayDataOnLoad };