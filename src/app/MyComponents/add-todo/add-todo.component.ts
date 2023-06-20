import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { toDo } from "../../toDo";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<toDo> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onSubmit(){
    const todo = {
      title: this.title,
      desc: this.desc
    }
    this.todoAdd.emit(todo);
  }
}
