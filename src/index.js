import './style.css';
import { Project } from './project';
import { Task } from './task';
import { displayController } from './displayController';

let allProjects = [];

let project = new Project('home');

let task1 = new Task('do chores', 'Lorem ipsum dolor sit amet. Ut molestias consequatur non veniam iusto eos mollitia doloribus aut molestiae labor', '25.02.2023', 'mid');
let task2 = new Task('homework qwe rfghjhgf rtgyhuygtf rd ertgytrertyhuj dnrn', 'Lorem ipsum dolor sit amet. Ut molest', '25.02.2023', 'high');
project.addTask(task1);
project.addTask(task2);

let workProject = new Project('work fednrmr yrmne etnet w n etn e wtyetjemry');

let workTask1 = new Task('Write code', 'wrwlb wlrbk', '24.02.2023', 'high');
let workTask2 = new Task('Fix keyboard', 'Your keyboard is dead', '28.02.2023', 'low');
let workTask3 = new Task('Send email to boss', 'He need information from you', '24.02.2023', 'mid');
workProject.addTask(workTask1);
workProject.addTask(workTask2);
workProject.addTask(workTask3);

allProjects.push(project);
allProjects.push(workProject);

displayController.generatePage(allProjects, 0);

let addProjectButton = document.getElementById('add-project-button');
addProjectButton.addEventListener('click', () => {
    let newProject = new Project('Untitled');
    allProjects.push(newProject);
    displayController.generatePage(allProjects, allProjects.length - 1);
});