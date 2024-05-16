import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'day32';

  taskList: Todo[] = [];
  
  todoSubmitted(todo: Todo) {
    console.log(todo);
    console.log(this.taskList);
    this.taskList.push(todo);
    console.log(this.taskList);

    localStorage.setItem("todos", JSON.stringify(this.taskList));
  }

  ngOnInit(): void {
    this.loadTodosFromLocalStorage();
  }

  loadTodosFromLocalStorage() {
    const localTodos = localStorage.getItem("todos");
  
    //in javascript empty strings, null, undefined, 0, and false are considered falsy
    if (localTodos) {
      this.taskList = JSON.parse(localTodos) as Todo[];
    }
  }

}
