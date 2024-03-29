import autosize from "autosize";

const displayController = (function () {
  let taskContainer = document.querySelector('.task-container');
  let addTaskButton = document.getElementById('add-task-button');
  let projectsContainer = document.getElementById('projects-container');

  const generatePage = (projects, position) => {
    //console.log('call generatePage');
    projectsContainer.innerHTML = '';
    projects.forEach((project) => {
      generateProjects(project, projects);
    });
    generateProjectPage(projects[position], projects);
  }

  // Function generates projects on sidebar
  const generateProjects = (project, projects) => {
    //console.log('call generateProjects');
    let newProject = document.createElement('div');
    newProject.textContent = project.getTitle();
    let removeProjectButton = document.createElement('button');
    removeProjectButton.textContent = 'x';
    newProject.append(removeProjectButton);
    removeProjectButton.addEventListener('click', () => {
      if (projects.indexOf(project) >= 0) {
        projects.splice(projects.indexOf(project), 1);
        projectsContainer.innerHTML = '';
        projects.forEach((project) => {
          generateProjects(project, projects);
        });
      }
    });
    newProject.classList.add('side-block');
    projectsContainer.append(newProject);
    newProject.addEventListener('click', (e) => {
      if (e.target.tagName == 'BUTTON') {
        return;
      }
      generateProjectPage(project, projects);
    });
  }

  // Function generates tasks in main block
  const generateTask = (task, project, projects) => {
    //console.log('call generateTask');
    let newTask = document.createElement('div');
    let status = document.createElement('input');
    status.type = 'checkbox';
    newTask.append(status);

    let taskHeader = document.createElement('h3');
    taskHeader.textContent = task.title;
    taskHeader.classList.add('task-header');
    newTask.append(taskHeader);

    let taskPriority = document.createElement('p');
    taskPriority.textContent = task.priority;
    taskPriority.classList.add('task-priority');
    newTask.append(taskPriority);

    let taskDueDate = document.createElement('p');
    taskDueDate.textContent = task.dueDate;
    taskDueDate.classList.add('task-due-date');
    newTask.append(taskDueDate);

    let description = document.createElement('p');
    description.textContent = task.description;
    description.classList.add('task-description');
    newTask.append(description);

    let removeButton = document.createElement('button');
    removeButton.classList.add('remove-task-button');
    removeButton.textContent = 'X';
    newTask.append(removeButton);
    removeButton.addEventListener('click', () => {
      project.removeTask(task);
      generateProjectPage(project, projects);
    });

    newTask.classList.add('task');

    newTask.addEventListener('click', (e) => {
      if (e.target.tagName == 'INPUT' || e.target.tagName == 'BUTTON') {
        return;
      }
      // function that generates add/update task form
    });
    taskContainer.append(newTask);
  }

  //Function generates main header
  const generateHeader = (project, projects) => {
    //console.log('Called generateHeader()');

    let projectHeader = document.getElementById('main-header');
    projectHeader.remove();
    projectHeader = document.createElement('textarea');
    projectHeader.id = 'main-header';
    taskContainer.before(projectHeader);
    
    projectHeader.value = project.getTitle();
    autosize(projectHeader);
    projectHeader.addEventListener('change', () => {
      //console.log(project);
      //console.log(projects);
      project.setTitle(projectHeader.value);
      projectsContainer.innerHTML = '';
      projects.forEach((project) => {
        generateProjects(project, projects);
      });
      generateHeader(project, projects);
    });
    autosize.update(projectHeader);
  }

  //Function generates main page
  const generateProjectPage = (project, projects) => {
    //console.log('call generateProjectPage');
    addTaskButton.removeEventListener('click', () => { });
    addTaskButton.classList.remove('hide');
    taskContainer.innerHTML = '';
    generateHeader(project, projects);
    addTaskButton.addEventListener('click', () => { generateTaskForm(project, projects) });

    let tasks = project.getAllTasks();
    if (tasks.length != 0) {
      tasks.forEach(value => generateTask(value, project, projects));
    }
  }

  const generateTaskForm = (project, projects) => {
    //console.log('call generateTaskForm');
    taskContainer.innerHTML = '';
    addTaskButton.classList.add('hide');
    let projectHeader = document.getElementById('main-header');
    projectHeader.textContent = 'Adding new task';
    projectHeader.disabled = true;

    let form = document.createElement('form');

    let titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    let titleForm = document.createElement('input');
    titleForm.type = 'text';
    titleForm.required = true;

    let priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    let priorityForm = document.createElement('select');
    let priorities = '<option value="high">High</option><option value="mid">Mid</option><option value="low">Low</option>';
    priorityForm.insertAdjacentHTML("afterbegin", priorities);

    let dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due date:';
    let dueDateForm = document.createElement('input');
    dueDateForm.type = 'datetime-local';

    let descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    let descriptionForm = document.createElement('textarea');
    // descriptionForm.type = 'textarea';

    let submitButton = document.createElement('button');
    submitButton.id = 'submit-button';
    submitButton.textContent = 'Submit';
    submitButton.type = 'button';

    form.append(titleLabel, titleForm, priorityLabel, priorityForm, dueDateLabel, dueDateForm, descriptionLabel, descriptionForm, submitButton);
    taskContainer.append(form);

    submitButton.addEventListener('click', () => {
      project.createTask(titleForm.value, descriptionForm.value, dueDateForm.value, priorityForm.value);
      projectHeader.disabled = false;
      generateProjectPage(project, projects);
    });
  }

  return { generateProjects, generateTask, generateHeader, generateProjectPage, generatePage }
})();

export { displayController };