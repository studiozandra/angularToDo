import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // headers for sending data in content type of JSON
import { Todo } from '../models/TodoFormat'; // the TS file which tells the proper format for each task
import { Observable } from 'rxjs'; // short for Reactive eXtensions

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}



var localTodos = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": false
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
]


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  todosLimit = '?_limit=5'; // tthis added to the url limits the ger request to 5 responses.

  constructor(private http: HttpClient) { } // we can just say this.http.blahblah

  // Get Todos -- this service feeds the tasks with a get request to the JSON Placeholder URL
  getTodos(): Observable<Todo[]> { // similar to making requests in React with Axios
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`); // since we made the URL a property we access it using 'this'. backtick and template literal syntax to add the limit of 5.

  }

  // Delete Todo
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Toggle Completed (should be a put request but we can't actually update anything on the server)
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  //Add Todo - post request
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);

  }

}
