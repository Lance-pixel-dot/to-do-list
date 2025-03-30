import { Project } from ".";
import { overdueSpan } from "./overdue-task";
import { displayTaskOnProject } from "./project-task";

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
    displayProject(newProject.name);

})

function displayProject(projectName){

    const projectOption = document.createElement('option');
    projectOption.setAttribute('value', projectName);
    projectOption.textContent = projectName;

    projectSelect.appendChild(projectOption);

    const projectButton = document.createElement('button');
    projectButton.setAttribute('class', 'project-button');
    projectButton.textContent = projectName;

    projectContainer.appendChild(projectButton);

    const getProjectButton = document.querySelectorAll('.project-button')

    getProjectButton.forEach(button => {
        button.addEventListener('click', (e) => {
            if(localStorage.length > 0){
                const getProjectName = e.target.textContent;
                console.log(e.target);
                overdueSpan.textContent = "";
                displayTaskOnProject(getProjectName);
            }
        })
    })
    
}

export { displayProject, newProjectButton};