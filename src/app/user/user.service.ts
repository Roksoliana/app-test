import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  subject = new Subject();
  private lastId: number = 5;
  private users: User[] =[
    {name: "User1", surname: "User-1", email: "some1@mail.com", age: "25", id:1},
    {name: "User2", surname: "User-2", email: "some2@mail.com", age: "26", id:2},
    {name: "User3", surname: "User-3", email: "some3@mail.com", age: "27", id:3},
    {name: "User4", surname: "User-4", email: "some4@mail.com", age: "28", id:4},
    {name: "User5", surname: "User-5", email: "some5@mail.com", age: "29", id:5}    
  ];
  public getU(){
    return new Promise(i => i(this.users));
  }
  public addU(val:any){
    return new Promise(resolve => {
      this.lastId ++;
      val.id = this.lastId;
      this.users =[...this.users, val];
      this.subject.next(this.users);
      resolve(val);
    });
  }
  public update(user: User): Promise<User> {
    return new Promise(() => {
      this.users = this.users.map(oldUser => oldUser.id === user.id ? user : oldUser);
      this.subject.next(this.users);
    });
  }
  public deleteU(id:number){
    return new Promise(()=>{
      this.users = this.users.filter(i => i.id !== id);
      this.subject.next(this.users);
    });
  }
  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }
}
