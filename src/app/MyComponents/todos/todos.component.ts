import { Component, OnInit } from '@angular/core';
import { toDo } from "../../toDo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:toDo[];
  constructor() {  
    this.todos = [
      {
        sno:1,
        title: "It's Ahmad here",
        desc: "Developer"
      },
      {
        sno:2,
        title: "It's Saad here",
        desc: "HR"
      },
      {
        sno:3,
        title: "It's Sam here",
        desc: "Manager"
      }
    ]
  }

  ngOnInit() {
  }

  deleteTodo(todo:toDo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
