import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {TodosService} from '../services/todos-service';
import {Observable} from 'rxjs';
import {Todos} from '../models/todos';

@Component({
  selector: 'app-todos',
  imports: [AsyncPipe, NgForOf, NgIf],
  templateUrl: './todos.component.html',
  standalone: true,
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos$!: Observable<Todos[]>;

  constructor(private todoService: TodosService){

  }

  async ngOnInit() {
    this.todos$ = this.todoService.getTodos();
  }

}
