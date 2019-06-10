import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  
  constructor(private userService: UserService) { }
  private users: any;
  private subscription: Subscription;
  private nrSelect: string = 'name';
  
  ngOnInit(): void {
    this.getUsers();
    this.subscription = this.userService.getObservable().subscribe(i=>this.users=i);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  private getUsers(): void{
    this.userService.getU().then(i=>this.users=i);
  }
}
