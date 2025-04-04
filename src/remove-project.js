function deleteProject(projectName){

    console.log(projectName);

    const getLocalStore = JSON.parse(localStorage.getItem('userTask'));

    const newArray = [];

    getLocalStore.forEach(e => {
        const getTaskProject = e.projectName;

        const index = getLocalStore.indexOf(e);

        if(getTaskProject != projectName){
            console.log(getLocalStore[index]);
            newArray.push(getLocalStore[index]);
        }

    })

    console.log(newArray);

    localStorage.setItem('userTask', JSON.stringify(newArray));

}

export { deleteProject };