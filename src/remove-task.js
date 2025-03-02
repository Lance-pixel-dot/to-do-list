import { contentDiv } from "./display-task";

function deleteTask(e){
    
    const index = e.target.parentElement.getAttribute('key');

    console.log(index);

    // const key = localStorage.key(index);

    // console.log(key);

    const getLocalStore = JSON.parse(localStorage.getItem(index));

    console.log(getLocalStore);
    // forEach(e => {
        
    //     e.onclick = function(){
    //     const parent = getTaskContainer.parentNode;
    //     const index = getTaskContainer.getAttribute('index');

    //     console.log(index);
    
    //     // contentDiv.removeChild(contentDiv.children[index]);
    
    //     // const key = localStorage.key("userTask" + index);
    //     // localStorage.removeItem(key);    
    //     }    
    // });

    // element.forEach(e => {
    //     e.onclick = function(){
    //         const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement);

    //         const key = localStorage.key("userTask" + index);
    //         localStorage.removeItem(key);
            
    //         for(let i = 0; i < localStorage.length; i++){

    //             const getLocalData = JSON.parse(localStorage.getItem('userTask' + i));
    //             // localStorage.clear();
    //             localStorage.setItem("userTask" + localStorage.length, JSON.stringify(getLocalData));
        
    //         }

    //         contentDiv.removeChild(contentDiv.children[index]);
    //     }
    // });

}

//This function will get the tasks and edit their key to be in order then store them back to local storage.
// function editTaskKey(){


// }

export { deleteTask };