import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavbarService {
  private userSource = new BehaviorSubject({
    name: 'Name',
    username: 'Username',
  });
  currentUser = this.userSource.asObservable();

  changeUser(user: any): void {
    this.userSource.next(user);
  }
}
