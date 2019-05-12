import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    // this.todos = this.todoService.getTodos(); // This works for a hard-coded array. But we can't return from TodoService external JSON Placeholder website, bc it's asynchronous, like a promise, use Subscribe. think of it as .then
    this.todos = this.todoService.getTodos().subscribe(todos => {
      this.todos = todos; // set todos on line 12 equal to the todos that are being returned.
    });
  }

  deleteTodo(todo:Todo) {
    // Remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id) // returning all todos WITHOUT that id

    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
    console.log('delete me')
  }

}
