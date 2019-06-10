import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() newUser: User;
  @Input() edit: boolean;

  @Output() validatin = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
