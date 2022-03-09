import { Component, OnInit } from '@angular/core';
import { Todos } from '../../model/todos';
import { TodosService } from '../../services/todos.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {
  todoList: Todos[];
  apiError: any;

    constructor(private todosService: TodosService) {}

    ngOnInit() {
      this.loadTodos();
    }
    loadTodos() {
      this.todosService.getTodos().subscribe(res => {
        console.log(res);
        this.todoList = res;
      },
      err => {
        this.apiError = err;
      });
    }

}
