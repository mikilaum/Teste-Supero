import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../task.service";
import {Task} from "../Task";
import {ActivatedRoute, Router} from '@angular/router';
 
 
@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  providers: [TaskService]
})
export class TaskCreateComponent implements OnInit, OnDestroy {
 
  id: number;
  task: Task;
 
  taskForm: FormGroup;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private taskService: TaskService) { }
 
  ngOnInit() {
   this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    
    this.taskForm = new FormGroup({
      taskName: new FormControl('', Validators.required),
      taskDescription: new FormControl('', Validators.required)
    });
  

    if (this.id) {
      this.taskService.findById(this.id).subscribe(
        task => {
            this.id = task.taskId;
            this.taskForm.patchValue({
            taskName: task.taskName,
            taskDescription: task.taskDescription,
          });
         },error => {
          console.log(error);
         }
      );
    }
    
 
  }
 
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
 
  onSubmit() {
    if (this.taskForm.valid) {
          if (this.id) {
            let task: Task = new Task(this.id,
              this.taskForm.controls['taskName'].value,
              this.taskForm.controls['taskDescription'].value);
              this.taskService.updateTask(task).subscribe();
          } else {
            let task: Task = new Task(null,
              this.taskForm.controls['taskName'].value,
              this.taskForm.controls['taskDescription'].value);
              this.taskService.saveTask(task).subscribe();
          }
     }
      this.taskForm.reset();
      this.router.navigate(['/task']).then((res) => {
        window.location.reload();
    });;
  }
 
  redirectTaskPage() {
    this.router.navigate(['/task']);
  }
}