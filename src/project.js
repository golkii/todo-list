import { Task } from './task';

class Project {
  title = 'Untitled';
  tasks = [];

  constructor(title, newTasks) {
    this.title = title;
    if (this.tasks.length == 0 && newTasks != undefined) {
      this.tasks = newTasks;
    }
    else if (newTasks != undefined){
      this.tasks = this.tasks.concat(newTasks);
    }
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  createTask(title, description, dueDate, priority) {
    let newTask = new Task(title, description, dueDate, priority);
    this.tasks.push(newTask);
  }

  getTask(position) {
    return this.tasks[position];
  }

  setTitle(value) {
    this.title = value;
  }

  getTitle() {
    return this.title;
  }

  getAllTasks() {
    return this.tasks;
  }

  getNumberOfTasks() {
    return this.tasks.length;
  }

  removeTask(task) {
    if (this.tasks.indexOf(task) >= 0) {
      let temp = this.tasks.indexOf(task);
      this.tasks.splice(temp, 1);
    }
  }
}

export { Project };