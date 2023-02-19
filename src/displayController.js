const displayController = (function () {
  let projectsHeader = document.getElementById('side-block-container');
  let taskContainer = document.querySelector('.task-container');
  let addTaskButton = document.getElementById('add-task-button');

  // Function generates projects on sidebar
  const generateProjects = (project) => {
    let newProject = document.createElement('div');
    newProject.textContent = project.getTitle();
    newProject.classList.add('side-block');
    projectsHeader.append(newProject);

    newProject.addEventListener('click', () => generateProjectPage(project));
  }

  // Function generates tasks in main block
  const generateTask = (task) => {
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

    newTask.classList.add('task');

    newTask.addEventListener('click', (e) => {
      if (e.target.tagName == 'INPUT') {
        return;
      }
      // function that generates add/update task form
    });
    taskContainer.append(newTask);
  }

  //Function generates main header
  const generateHeader = (project) => {
    let projectHeader = document.getElementById('main-header');
    projectHeader.textContent = project.getTitle();
  }

  //Function generates main page
  const generateProjectPage = (project) => {
    addTaskButton.removeEventListener('click', () => { });
    addTaskButton.classList.remove('hide');
    taskContainer.innerHTML = '';
    generateHeader(project);
    addTaskButton.addEventListener('click', () => { generateTaskForm(project) });

    let tasks = project.getAllTasks();
    if (tasks.length != 0) {
      tasks.forEach(value => generateTask(value));
    }
  }

  const generateTaskForm = (project) => {
    taskContainer.innerHTML = '';
    addTaskButton.classList.add('hide');
    let projectHeader = document.getElementById('main-header');
    projectHeader.textContent = 'Adding new task';

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
      generateProjectPage(project);
    });
  }

  return { generateProjects, generateTask, generateHeader, generateProjectPage }
})();

export { displayController };