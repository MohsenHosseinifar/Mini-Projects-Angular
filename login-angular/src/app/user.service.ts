import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  savedUsername: string | null = null; // تعریف به عنوان ویژگی کلاس
  savedPassword: string | null = null; // تعریف به عنوان ویژگی کلاس
  savedUsernameSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>('');
  savedPasswordSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>('');
  

  constructor() {
    this.loadSavedCredentials();
  }
  login(username: string, password: string) {
    // احراز هویت کاربر و ذخیره نام کاربری در localStorage
    // برای مثال:
    this.saveCredentials(username, password);
  }

  private loadSavedCredentials() {
    this.savedUsername = localStorage.getItem('savedUsername'); // استفاده از ویژگی savedUsername
    this.savedPassword = localStorage.getItem('savedPassword'); // استفاده از ویژگی savedPassword
    this.savedUsernameSubject.next(this.savedUsername);
    this.savedPasswordSubject.next(this.savedPassword);
    console.log('loadSavedCredentials:', this.savedUsername, this.savedPassword);
  }

  saveCredentials(username: string, password: string) {
    localStorage.setItem('savedUsername', username);
    localStorage.setItem('savedPassword', password);
    this.loadSavedCredentials();
    console.log('saveCredentials:', username, password);
  }
}
/* import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  savedUsername: string | null = null;
  savedPassword: string | null = null;
  // ...
  
  login(username: string, password: string) {
    // احراز هویت کاربر و ذخیره نام کاربری در localStorage
    // برای مثال:
    this.saveCredentials(username, password);
  }
  
  // ...
}
 */