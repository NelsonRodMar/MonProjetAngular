import {User} from '../models/User.model';
import {Subject} from 'rxjs';
import {Validators} from '@angular/forms';

export class UserService {
  private users: User[] = [
    new User(
      'Nelson',
      'Rodrigues Marreiros',
      'test@test.com',
      'jus d\'orange',
      ['coder', 'boire du café', 'manger', 'courir']
    )
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
