import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from './../user.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})
export class OneUserComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  @Input () user: User;
  @Output () clickUpdateUser = new EventEmitter<any>();
  newUser={};
  edit: boolean = false;

  ngOnInit(): void{
    this.newUser={...this.user}
  }

  private deleteUser(id: number){
    this.userService.deleteU(id);
  }
  private editUser(): void{
    this.edit = !this.edit;
  }
  private canselUser(): void{
    this.newUser={...this.user}
    this.editUser();
  }
  private saveUser(): void{
    this.userService.update(this.newUser);
    this.editUser();
  }
  public onClickUpdate(): void{
    this.clickUpdateUser.emit(this.newUser);
  }
}
