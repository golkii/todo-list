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

  getTask(position) {
    return this.tasks[position];
  }

  setTitle(value) {
    this.title = value;
  }

  getTitle() {
    return this.title;
  }
}

export { Project };