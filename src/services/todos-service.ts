import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todos} from '../models/todos';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosService {

  private readonly url : string = 'http://localhost:8080/api/v1/todo';

  constructor(
    private http: HttpClient
  ) {}

  getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>(this.url+'/todos');
  }

}
