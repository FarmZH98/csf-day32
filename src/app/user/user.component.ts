import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { nonWhiteSpace } from '../custom-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  userForm!: FormGroup;
  foodArray!: FormArray;

  //user!: User;
  user: User = new User('', '', '', []);
  food1!: FormGroup<any>;

  constructor(private formBuilder: FormBuilder) {
    
  }
  
  ngOnInit(): void {
    this.foodArray = this.formBuilder.array([]);

    this.userForm = this.formBuilder.group({
      lastname: this.formBuilder.control<string>('', [ Validators.required, Validators.minLength(5), Validators.maxLength(50) ]),
      firstname: this.formBuilder.control<string>('', [ Validators.required, Validators.minLength(5), Validators.maxLength(50) ]),
      email: this.formBuilder.control<string>('', [Validators.required, Validators.email, nonWhiteSpace]),
      foods: this.foodArray//this.formBuilder.array([]),
    });


  }

  addNewFood() {
  //  const foodItem = this.formBuilder.group({
  //     f1: this.formBuilder.control('')
  //   });
  //using formBuilder.control instead of empty string gives more options for us like validation etc. Can google/chatgpt for more complete info
    this.food1 = this.formBuilder.group({
          f1: this.formBuilder.control('')
        });

    this.foodArray.push(this.food1);
  }

  deleteFood(itm: number) {
    if(this.foodArray.length !==1 ) {
      this.foodArray.removeAt(itm);
    }
  }

  processUserForm() {
    const userInfo = this.userForm.value;
    console.log("User Form:" + this.userForm.controls['firstname'].value);
    console.log("User Form:" + this.userForm.controls['foods'].value);

    console.log("User Info Email:" + userInfo.email);


    console.log("User Info Food length:" + userInfo.foods.length);
    // for (let i = 0; i < userInfo.foods.length; i++) {
    //   console.log("User Info Food: {{i}}" + userInfo.foods[i].f1);
    // }

    for (var food of userInfo.foods) {
      console.log("User Info Food:" + food.f1);
    }
  }

}
