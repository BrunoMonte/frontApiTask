import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'tasks',
    component: TaskList,
  },
  {
    path: 'new-task',
    component: TaskForm,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
