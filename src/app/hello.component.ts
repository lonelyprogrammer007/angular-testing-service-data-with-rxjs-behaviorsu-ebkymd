import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from './user.model';

import { UserService } from './user.service';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello</h1>
  `,
})
export class HelloComponent implements OnInit, OnDestroy {
  // username: Observable<User>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.username = this.userService.currentUserSubject;
  }

  ngOnDestroy(): void {}
}
