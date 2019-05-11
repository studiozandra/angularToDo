import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // headers for sending data in content type of JSON
import { Todo } from '../models/Todo'; // the TS file which tells the proper format for each task
import { Observable } from 'rxjs'; // short for Reactive eXtensions

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';

  todosLimit = '?_limit=5'; // tthis added to the url limits the ger request to 5 responses.

  constructor(private http:HttpClient) { } // we can just say this.http.blahblah
  
  // this service feeds the tasks with a get request to the JSON Placeholder URL
  getTodos():Observable<Todo[]> { // similar to making requests in React with Axios
     return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`); // since we made the URL a property we access it using 'this'. backtick and template literal syntax to add the limit of 5.
     
  }


}
