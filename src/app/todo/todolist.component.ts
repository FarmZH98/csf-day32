import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  
  @Input()
  TaskList: Todo[]= [];

  

}
