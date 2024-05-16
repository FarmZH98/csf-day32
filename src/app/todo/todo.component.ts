import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../model/todo';
import { Subject } from 'rxjs';
import { lessThanToday } from '../custom-validator';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  todoForm!: FormGroup;
  priorities: string[] = ['Low', 'Medium', 'High'];

  @Output()
  onTodoSubmitted = new Subject<Todo>()

  //todo: Todo = new Todo();

  constructor(private formBuilder: FormBuilder) {
    
  }


  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      description: this.formBuilder.control<string>('', [ Validators.required, Validators.minLength(5) ]), 
      due: this.formBuilder.control<Date | null>(null, [Validators.required, lessThanToday]), 
      //this.formBuilder.control<Date | null>(null, [Validators.required, lessThanToday]), 
      priority: this.formBuilder.control<string>('low', [Validators.required])
    });
  }

  // addTask() {
  //   throw new Error('Method not implemented.');
  // }

  onSubmit() {
    const todoForm = this.todoForm.value;
    //console.log(todoForm);

    //we should create a new todo everytime, or else, we are only modifying the object, which means the object that was pushed into the array will be updated when we update here as well.
    const todoSubmitted = new Todo();
    todoSubmitted.description = todoForm.description;
    todoSubmitted.due = todoForm.due;
    todoSubmitted.priority = todoForm.priority;

    // this.todo.description = todoForm.description;
    // this.todo.due = todoForm.due;
    // this.todo.priority = todoForm.priority;
    
    //export
    this.onTodoSubmitted.next(todoSubmitted);
    

  }

}
