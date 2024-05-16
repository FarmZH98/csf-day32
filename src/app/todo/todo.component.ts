import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../model/todo';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  todoForm!: FormGroup;

  @Output()
  onFigureClicked = new Subject<Todo>()

  todo: Todo = new Todo();

  constructor(private formBuilder: FormBuilder) {
    
  }


  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      description: this.formBuilder.control<string>('', [ Validators.required, Validators.minLength(5) ]), 
      due: ['', Validators.required], 
      priority: ['', Validators.required]
    });
  }

  // addTask() {
  //   throw new Error('Method not implemented.');
  // }

  onSubmit() {
    const todoForm = this.todoForm.value;
    console.log(todoForm);
    this.todo.description = todoForm.description;
    this.todo.due = todoForm.due;
    this.todo.priority = todoForm.priority;
    
    //export
    this.onFigureClicked.next(this.todo);
    

  }

}
