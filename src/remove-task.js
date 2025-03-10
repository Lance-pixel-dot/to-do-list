import { contentDiv } from "./display-task";

function deleteTask(){
    
    const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement) - 1;

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    const removeParent = contentDiv.removeChild(contentDiv.children[index + 1]);
    getLocalStore.splice(index, 1);

    localStorage.setItem("userTask", JSON.stringify(getLocalStore));

}

export { deleteTask };