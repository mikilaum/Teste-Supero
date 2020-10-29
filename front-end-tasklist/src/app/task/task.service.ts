import { Injectable } from '@angular/core';
import { Task } from "./task";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
 
@Injectable()
export class TaskService {
 
  private apiUrl = 'http://localhost:8080/tasks';
  
  constructor(private http: Http) {
  }
 
  search(): Observable<Task[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json()._embedded.tasks);
  }

  findById(id: number): Observable<Task> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res:Response) => res.json());
  }
 
  updateTask(task: Task): Observable<Task> {
    return this.http.put(this.apiUrl + '/' + task.taskId, task)
      .map((res:Response) => res.json());
  }

  public saveTask(task: Task): Observable<Task> {
    return this.http
      .post(this.apiUrl, task)
      .map((res:Response) => res.json());
  }
  
  deleteTaskById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res:Response) => res.json());
  }

  changeTaskStatusById(task: Task): Observable<boolean> {
    return this.http.patch(this.apiUrl + '/' + task.taskId, {
        "taskFinished": JSON.stringify(task.taskFinished),
    })
      .map((res:Response) => res.json());
  }
 

 
}