import { Project } from ".";
import { overdueSpan } from "./overdue-task";
import { displayTaskOnProject } from "./project-task";
import { storeProject } from "./web-storage";
import { deleteProject } from "./remove-project";

const projectContainer = document.querySelector(".project-container");
const projectSelect = document.querySelector('#project');
const newProjectButton = document.querySelector('.add-project');
const projectNameInput = document.querySelector('.project-name');
const projectForm = document.querySelector('.project-form');
const cancelButton = document.querySelector('.close-dialog-project');
const dialog = document.querySelector('.add-new-project');

cancelButton.addEventListener('click', () => {
    dialog.close();

    projectNameInput.value = "";
});

newProjectButton.addEventListener('click', () => {

    dialog.showModal();

})

projectForm.addEventListener('submit', e => {
    e.preventDefault();

    const newProject = new Project(projectNameInput.value);
    storeProject(newProject);
    displayProject(newProject.name);

})

function displayProject(projectName){

    const projectHolder = document.createElement('div');

    const projectOption = document.createElement('option');
    projectOption.setAttribute('value', projectName);
    projectOption.textContent = projectName;

    projectSelect.appendChild(projectOption);

    const projectButton = document.createElement('button');
    projectButton.setAttribute('class', 'project-button');
    projectButton.textContent = projectName;

    projectContainer.appendChild(projectHolder);

    projectHolder.appendChild(projectButton);

    if(projectName != "My Project"){
        const removeProjectButton = document.createElement('button');
        removeProjectButton.setAttribute('class', 'project-delete');
        removeProjectButton.textContent = "Remove Project";
        projectHolder.appendChild(removeProjectButton);
    }

    const getProjectButton = document.querySelectorAll('.project-button');

    getProjectButton.forEach(button => {
        button.addEventListener('click', (e) => {
            if(localStorage.length > 0){
                const getProjectName = e.target.textContent;
                overdueSpan.textContent = "";
                displayTaskOnProject(getProjectName);
            }
        })
    })

    const getProjectDeleteButton = document.querySelectorAll('.project-delete');

    getProjectDeleteButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const sibling = e.target.previousSibling.textContent;
        deleteProject(sibling);
    })
})
    
}


export { displayProject, newProjectButton, projectSelect };