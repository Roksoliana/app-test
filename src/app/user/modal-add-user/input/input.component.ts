import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() newUser: User;
  @Input() edit: boolean;

  public userForm: FormGroup;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }
  private initForm(): void {
    this.userForm = this.formbuilder.group({
      name: new FormControl(this.newUser.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      surname: new FormControl(this.newUser.surname, [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(this.newUser.email, [
        Validators.required,
        Validators.minLength(4)
      ]),
      age: new FormControl(this.newUser.age, [
        Validators.required
      ])
    });
  }

}
