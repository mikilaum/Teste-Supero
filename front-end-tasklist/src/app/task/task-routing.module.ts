import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
 
const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'task', component: TaskListComponent},
  {path: 'task/create', component: TaskCreateComponent},
  {path: 'task/edit/:id', component: TaskCreateComponent}
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }