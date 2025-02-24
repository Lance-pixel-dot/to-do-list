import { taskArr } from "./create-task";
// import { displayLocalTask } from "./display-task";

function setLocalStorage(){

    localStorage.setItem("userTask", JSON.stringify(taskArr));
    const getArrayData = JSON.parse(localStorage.getItem('userTask'));
    console.log(getArrayData);
    // displayLocalTask(getArrayData);
}

export { setLocalStorage };