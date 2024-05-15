import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrl: './user-skills.component.css'
})
export class UserSkillsComponent implements OnInit {
  skillForm!: FormGroup;
  //formbuilder!: FormBuilder
  //formBuilder: FormBuilder | any;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.skillForm = this.formBuilder.group({
      name: '',
      skills: this.formBuilder.array([])
    })
  }

    addSkill() {
      this.getSkills().push(this.newSkill());
    }

    getSkills(): FormArray {
      return this.skillForm.get("skills") as FormArray;
    }

    newSkill(): FormGroup {
      return this.formBuilder.group({
        Skill: '',
        Experience: ''
      })
    }

    onSubmit() {
      console.log(this.skillForm.value);
    }
}
