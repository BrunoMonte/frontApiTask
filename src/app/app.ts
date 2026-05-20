import { Component, signal } from '@angular/core';
import { TaskList } from './components/task-list/task-list';
import { TaskForm } from './components/task-form/task-form';

@Component({
  selector: 'app-root',
  imports: [ TaskList, TaskForm],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('task-manager-frontend');
}