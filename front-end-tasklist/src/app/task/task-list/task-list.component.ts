import { Component, OnInit } from '@angular/core';
import { Task } from "../task";
import { TaskService } from "../task.service";
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  providers: [TaskService]
})
export class TaskListComponent implements OnInit {
 
  private tasks: Task[];
  public status: boolean;

  constructor(private router: Router,
    private taskService: TaskService) { 
      
    }
 
  ngOnInit() { 
    this.getAllTasks();
  }

  getAllTasks() {
      this.taskService.search().subscribe(
      
      tasks => {
        this.tasks = tasks;
      },
      err => {
        console.log(err);
      }
    );
  }
 
  redirectNewTaskPage() {
    this.router.navigate(['/task/create']);
  }
 
  editTaskPage(task: Task) {
    if (task) {
      this.router.navigate(['/task/edit', task.taskId]);
    }
  }
 
  deleteTask(task: Task) {
    if (task) {
      this.taskService.deleteTaskById(task.taskId).subscribe(
        res => {
          this.getAllTasks();
          this.router.navigate(['/task']);
        }
      );
    }
  }

  changeTaskStatus(task: Task,value:number) {
     task.taskFinished = (!value) ? 0 :1 ;
     if (task) {
      this.taskService.changeTaskStatusById(task).subscribe(
        res => {
          this.getAllTasks();
          this.router.navigate(['/task']);
        }
      );
    } 
  }

}