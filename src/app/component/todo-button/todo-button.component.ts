import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BtnState } from '../../model/btn-state';
import { Todos } from '../../model/todos';

@Component({
  selector: 'app-todo-button',
  templateUrl: './todo-button.component.html',
  styleUrls: ['./todo-button.component.scss'],
})
export class TodoButtonComponent implements OnInit {

  @Input() reload: BtnState;
  @Input() loading: BtnState;
  @Input() loadingAndDelaying: BtnState;
  @Input() error: BtnState;
  @Input() todoList: Todos[];
  @Input() apiErorr: any;

  @Output() stateChange = new EventEmitter<string>();

    constructor() { }

  loadChanges(val: string) {
  this.stateChange.emit(val);
  }

  ngOnInit() {
    console.log('Error Msg:' + this.apiErorr);
    console.log('TodoList:' + this.todoList);

  }

}
