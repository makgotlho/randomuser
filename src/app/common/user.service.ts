import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
  url = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }
}
