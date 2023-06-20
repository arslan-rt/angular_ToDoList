import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core'; 
import { toDo } from "../../toDo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: toDo;
  @Output() todoDelete: EventEmitter<toDo> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(todo: toDo){
    this.todoDelete.emit(todo);
  }
}
