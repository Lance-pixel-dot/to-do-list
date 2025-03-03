import { contentDiv, displayTask } from "./display-task";

function deleteTask(){
    
    const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement);

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    console.log(index);
    console.log(getLocalStore[index]);

    this.parentElement.remove;
    getLocalStore.splice(index, 1);

    localStorage.setItem("userTask", JSON.stringify(getLocalStore));

    contentDiv.textContent = "";

    displayTask(getLocalStore);
}

export { deleteTask };