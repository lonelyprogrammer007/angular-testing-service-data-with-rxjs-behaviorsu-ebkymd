import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

import { UserService } from './user.service';

@Component({
  selector: 'hello',
  template: `
    <h1 *ngIf="(username | async).username">Hello {{ (username | async).username }}</h1>
  `,
})
export class HelloComponent implements OnInit {
  username: Observable<User>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.username = this.userService.currentUserSubject;
  }
}
