import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BtnState } from '../../model/btn-state';
import { Todos } from '../../model/todos';

@Component({
  selector: 'app-todo-button',
  templateUrl: './todo-button.component.html',
  styleUrls: ['./todo-button.component.scss'],
})
export class TodoButtonComponent implements OnInit {

  @Output() stateChange = new EventEmitter<string>();

    constructor() { }

  loadChanges(val: string) {
  this.stateChange.emit(val);
  }

  ngOnInit() {

  }

}
