const displayController = (function () {
  let projectsHeader = document.getElementById('projects');
  let taskContainer = document.querySelector('.task-container');

  const generateSideBar = (project) => {
    let newProject = document.createElement('div');
    newProject.textContent = project.getTitle();
    newProject.classList.add('side-block');
    projectsHeader.after(newProject);
  }

  const generateMain = (task) => {
    let newTask = document.createElement('div');
    newTask.textContent = task.title;
    newTask.classList.add('task');
    taskContainer.append(newTask);
  }

  return { generateSideBar, generateMain }
})();

export { displayController };