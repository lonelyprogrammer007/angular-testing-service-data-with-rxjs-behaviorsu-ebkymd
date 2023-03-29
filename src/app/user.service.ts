import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUserSubject: BehaviorSubject<User> = new BehaviorSubject({} as User);

  constructor() {}

  setCurrentUser(currentUser: User): void {
    this.currentUserSubject.next(currentUser);
  }
}
