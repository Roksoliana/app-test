import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from './../user.service';
import { User } from '../user';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})
export class OneUserComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  @Input () user: User;
  @Output () clickUpdateUser = new EventEmitter();

  newUser: User;
  private edit: boolean = false;
  
  ngOnInit(): void{
    this.getUser();
  }
  private getUser(){
    this.newUser = {...this.user};
  }
  private deleteUser(id: number){
    this.userService.deleteU(id);
  }
  private editUser(): void{
    this.edit = !this.edit;
  }
  private canselUser(): void{
    this.getUser();
    this.editUser();
  }
  private saveUser(u): void{
    this.userService.update(u);
    this.editUser();
  }
  public onClickUpdate(e: Event): void{
    console.log(e);
    e.stopPropagation();
    this.clickUpdateUser.emit(this.newUser);
  }
}
