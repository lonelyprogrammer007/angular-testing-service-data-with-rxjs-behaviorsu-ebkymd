import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(
    {} as User
  );
  // public readonly currentUser: Observable<User> = this.currentUserSubject.asObservable();

  constructor() {}

  setCurrentUser(currentUser: User): void {
    this.currentUserSubject.next(currentUser);
  }
}
