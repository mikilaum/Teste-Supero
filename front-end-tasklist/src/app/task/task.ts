export class Task {
 
    taskId: number;
    taskName: string;
    taskDescription: string;
    taskFinished: number;
   
    constructor(id: number, taskName: string, taskDescription: string){
      this.taskId = id;
      this.taskName = taskName;
      this.taskDescription = taskDescription;
      this.taskFinished = 0;
    }
   
  }