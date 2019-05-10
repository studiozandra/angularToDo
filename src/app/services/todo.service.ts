import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  // this service feeds the tasks 
  getTodos() {
    return [
      {
        id: 1,
        title: 'Task 1',
        completed: false
      },
      {
        id: 2,
        title: 'Task 2',
        completed: true
      },
      {
        id: 3,
        title: 'Task 3',
        completed: false
      }

    ]
  }


}
