import { Component, OnInit } from '@angular/core';
import { UserService } from './common/user.service';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: User[];
  currentUser: User;
  title = 'randomuser';
  header = 'Hi, My name is';
  headerValue: string;
  constructor(private userService: UserService) {}

  public ngOnInit() {
    this.userService.getUsers().subscribe(u => {
      this.users = u.results;
      if (this.users.length > 0) {
        this.currentUser = this.users[0];
        this.headerValue = `${this.currentUser.name.first} ${this.currentUser.name.last}`;
      }
    });
  }

  public onUser() {
    this.header = 'Hi, My name is';
    this.headerValue = `${this.currentUser.name.first} ${this.currentUser.name.last}`;
  }

  public onEmail() {
    this.header = 'My email address is';
    this.headerValue = `${this.currentUser.email}`;
  }

  public onBirth() {
    this.header = 'My birthday is';
    this.headerValue = `${this.currentUser.dob.date}`;
  }

  public onAddress() {
    this.header = 'My address is';
    this.headerValue = `${this.currentUser.location.postcode} - ${this.currentUser.location.street}`;
  }

  public onPhone() {
    this.header = 'My phone number is';
    this.headerValue = `${this.currentUser.phone}`;
  }

  public onPass() {
    this.header = 'My password is';
    this.headerValue = `${this.currentUser.login.password}`;
  }
}
