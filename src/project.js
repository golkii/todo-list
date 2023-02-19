import { Task } from './task';

class Project {
  title = 'Untitled';
  tasks = [];

  constructor(title) {
    this.title = title;
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
}

export { Project };