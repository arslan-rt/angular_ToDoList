import { Component, OnInit } from '@angular/core';
import { toDo } from "../../toDo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:toDo[];
  localItem:string;
  constructor() {  
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = []
    }
    else{
      this.todos = JSON.parse(this.localItem);
    } 
  }

  ngOnInit() { }

  deleteTodo(todo:toDo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
  addTodo(todo:toDo){
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo:toDo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
