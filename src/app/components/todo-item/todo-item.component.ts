import { Component, OnInit, Input } from '@angular/core';


import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item', //use this in the component's html file
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

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
    todo.completed = !todo.completed; //toggles the state to not completed, strikethrough
  }

  onDelete(todo) {
    console.log("delete");
  }


}
