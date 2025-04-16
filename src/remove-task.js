import { taskList } from "./display-task";

function deleteTask(){
    
    const index = [...this.parentElement.parentElement.parentElement.children].indexOf(this.parentElement.parentElement);

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    const removeParent = taskList.removeChild(taskList.children[index]);
    getLocalStore.splice(index, 1);

    localStorage.setItem("userTask", JSON.stringify(getLocalStore));

}

export { deleteTask };