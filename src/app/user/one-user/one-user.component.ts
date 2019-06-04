import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from './../user.service';
import { NgForm } from '@angular/forms';
import { EventEmitter } from 'protractor';
import { User } from '../user';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})
export class OneUserComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  @Input () user: User;
  @Output () clickUpdateUser = new EventEmitter ();
  @Output () updateClickUser = new EventEmitter ();
  newUser={};
  ngOnInit(){
    this.newUser={...this.user}
  }  
  edit: boolean = false;

  private deleteUser(id: number){
    this.userService.deleteU(id);
  }
  editUser(){
    this.edit = !this.edit;
  }
  canselUser(){
    this.newUser={...this.user}
    this.editUser();
  }
  saveUser(f: NgForm){
    console.log(f.value);
    this.newUser= f.value;
    this.edit = false;
  }
  onClickUpdate(event: Event): void{
    console.log(event)
    event.stopPropagation();
    this.clickUpdateUser.emit(JSON.stringify(this.newUser));
  }
}
