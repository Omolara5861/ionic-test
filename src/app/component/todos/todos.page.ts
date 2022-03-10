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

  /**
   *
   * Variables
   */
  todoList: Todos[];
  btnText: any;
    constructor(private todosService: TodosService) {}

    ngOnInit() {
      // Calling the method immediatly the page loads
      this.loadTodos();
      // this.reload(BtnState.error);
    }

    /**
     * @remarks
     * This method gets the response fetched from the api
     * @todoService access the get method in the service file
     * @subscribe method - subscribes to the method fetching this todos, it has 2 params,
     * the 'res' param which is the api response is assigned ti the todoList array and
     * changes the button text to reload upon successful response
     * The 'err' param catches the error the api might throw and set the button text
     * to the correct label
     */
    loadTodos() {
      this.todosService.getTodos().subscribe(res => {
        console.log(res);
        this.todoList = res;
        this.btnText = BtnState.loadedAndDelaying;
      },
      err => {
        this.btnText = BtnState.error;
      });
    }

    reload(state: any) {
      this.loadTodos();
      this.btnText = state;
      console.log(state);
    }

}
