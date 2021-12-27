import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';  // we need to emit an event upwards in order to delete a task from todos.component.html
import { TodoService } from '../../services/todo.service'; // and inject it on line 13

import { Todo } from 'src/app/models/TodoFormat';

@Component({
  selector: 'app-todo-item', //use this in the component's html file
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); // we will "catch" this in the todos.componenthtml file

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // Set Dynamic Classes here
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed //refers to the input being passed in on line 10
    }

    return classes;
  }

  onToggle(todo) {
    // toggle in UI
    todo.completed = !todo.completed; //toggles the state to not completed, strikethrough

    // toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));

  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
    console.log("delete");
  }


}
