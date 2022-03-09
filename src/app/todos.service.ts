import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  limit = 10;


  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  //  Handling possible api errors
  errorHandling(error: HttpErrorResponse) {
    // Handling client-side or network error
    if(error.error instanceof ErrorEvent) {
      console.error('An error occured: ', error.error.message);
    }
    // Handling error for fetching from api
    else {
      console.error(`Api returned code ${error.status}, and body: ${error}`);
    }

    // returning Observable for custom errors
    return throwError ('Some went wrong, please try again later.');
  }

  // Fetching Todo from the web (api)
  getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>(this.todosUrl).pipe(
      map((el) => el.slice(0, 10)),
      catchError(this.errorHandling)
    );
  }
}


