import { Component, OnInit } from '@angular/core';
import { Todos } from '../../model/todos';
import { TodosService } from '../../services/todos.service';
import { BtnState } from '../../model/btn-state';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {
  todoList: Todos[];
  btnText: any;
    constructor(private todosService: TodosService) {}

    ngOnInit() {
      this.loadTodos();
    }
    loadTodos() {
      this.todosService.getTodos().subscribe(res => {
        console.log(res);
        this.todoList = res;
        this.btnText = BtnState.loaded;
      },
      err => {
        this.btnText = BtnState.error;
      });
    }

    reload() {
      this.loadTodos();
      this.btnText = BtnState.loading;
    }

}
