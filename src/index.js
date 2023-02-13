import './style.css';
import { Project } from './project';
import { Task } from './task';
import { displayController } from './displayController';

let project = new Project('home');
let task1 = new Task('do chores', 'u should to clean home', '25.02.2023', 'high');
project.addTask(task1);

console.log(task1.title);
console.log(project.getTask(0));

displayController.generateSideBar(project);

displayController.generateMain(project.getTask(0));