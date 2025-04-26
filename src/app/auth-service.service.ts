import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private login: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {

  }

  setLogin(val: boolean) {
    this.login.next(val);
  }

  getLogin() {
    return this.login.getValue();
  }
}
