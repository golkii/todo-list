import './style.css';
import { Project } from './project';
import { Task } from './task';
import { displayController } from './displayController';

let allProjects = [];

if (localStorage.length == 0) {
    let task1 = new Task('task', 'Lorem ipsum dolor sit amet. Ut molestias consequatur', '25.02.2023', 'mid');
    let project = new Project('Default', [task1]);
    allProjects.push(project);
}
else {
    for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue;
        }
        let tmp = JSON.parse(localStorage.getItem(key), (key, value) => {
            if (key == 'tasks') {
                value.forEach((element, position) => {
                    value[position] = new Task(element._title, element._description, element._dueDate, element._priority);
                });
            };
            return value;
        });
        let tmp2 = new Project(tmp.title, tmp.tasks);
        allProjects.push(tmp2);
    }
}

document.addEventListener('click', () => {
    localStorage.clear();
    allProjects.forEach((element) => {
        localStorage.setItem(element.getTitle(), JSON.stringify(element));
    });
});

displayController.generatePage(allProjects, 0);

let addProjectButton = document.getElementById('add-project-button');
addProjectButton.addEventListener('click', () => {
    let newProject = new Project('Untitled');
    allProjects.push(newProject);
    displayController.generatePage(allProjects, allProjects.length - 1);
});