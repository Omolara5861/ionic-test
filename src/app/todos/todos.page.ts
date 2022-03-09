import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todos } from '../todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {

    todoList: Todos[];

    constructor(private todosService: TodosService) {}

    ngOnInit() {
      this.loadTodos();
    }
    loadTodos() {
      this.todosService.getTodos().subscribe(res => {
        console.log(res);
        this.todoList = res;
      });
    }

}
