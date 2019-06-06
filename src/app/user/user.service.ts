import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  subject = new Subject();
  private lastId: number = 5;
  private headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json' );
  private users: User[] =[
    {name: "User1", surname: "User-1", email: "some1@mail.com", age: 25, id:1},
    {name: "User2", surname: "User-2", email: "some2@mail.com", age: 26, id:2},
    {name: "User3", surname: "User-3", email: "some3@mail.com", age: 27, id:3},
    {name: "User4", surname: "User-4", email: "some4@mail.com", age: 28, id:4},
    {name: "User5", surname: "User-5", email: "some5@mail.com", age: 29, id:5}    
  ];
  public getU(){
    return this.http.get(env.apiUrl);
  }
  addU(user: User): Observable<User> {
    return this.http.post<User>(env.apiUrl, user, {
      headers: this.headers
    });
  }
  public updateU(user: User): Observable<User> {
    return this.http.put<User>(env.apiUrl, user, {
      headers: this.headers
    });
  }
  public deleteU(id:number): Observable<User>{
    return this.http.delete<User>(`${env.apiUrl}/${id}`);
  }
  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }
}
