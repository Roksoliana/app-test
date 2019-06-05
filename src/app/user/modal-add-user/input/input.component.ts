import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/user/user';
import { ActionConfig } from '../action/action.config.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() newUser: User;
  @Input() edit: boolean;
  @Input() formAttributes: ActionConfig;
  @Output('clickSubmit') clickSubmit: EventEmitter<User> = new EventEmitter();

  public userForm: FormGroup;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    if (String(this.newUser.id) !== 'undefined') {
      this.userForm.setValue(this.newUser);
    }
  }
  ngOnChanges(): void {
    if (this.userForm instanceof FormGroup) {
      this.userForm.reset();
      this.userForm.setValue(this.newUser);
    }
  }
  private initForm(): void {
    this.userForm = this.formbuilder.group({
      name: new FormControl(this.newUser.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ]),
      surname: new FormControl(this.newUser.surname, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ]),
      email: new FormControl(this.newUser.email, [
        Validators.required,
        Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
      ]),
      age: new FormControl(this.newUser.age, [
        // minNumberValidator(this.formAttributes.ageMin)
      ]),
      id: new FormControl(undefined),
    });
  }
  onSubmit(event: Event): void {
    event.stopPropagation();
    const user: User = Object.assign({}, this.userForm.value);
    this.clickSubmit.emit(user);
  }
}
