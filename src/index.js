import "./styles.css";
import { createTask, appendTask } from "./add-task";

const addTaskButton = document.querySelector(".add-task");

addTaskButton.addEventListener("click", () => {
    createTask();
})