import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  constructor() { }

  ngOnInit() {}

}
