import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message: any;
  model: any;
  isTwoFactor: any;
  username: string | undefined ;
  password: string | undefined;
  savedUsername: string | undefined;
  savedPassword: string | undefined;

  constructor(private router: Router,private userService: UserService ) {
    
  }

  ngOnInit(): void {
    this.loadSavedCredentials();
  }

  login(): void {
    
    console.log("login start");
    console.log('نام کاربری:', this.username);
    console.log('رمز عبور:', this.password);
    
    console.log("login end");

    if (this.username === 'mohsen' && this.password === '123') {
      this.router.navigate(['/user-info']);
    } else {
      alert('نام کاربری یا رمز عبور اشتباه است.');
    }
  }

  saveCredentials() {
    localStorage.setItem('savedUsername', this.username || '');
    localStorage.setItem('savedPassword', this.password || '');
    alert('اطلاعات ذخیره شد.');
  }

  loadSavedCredentials() {
    this.savedUsername = localStorage.getItem('savedUsername') || '';
    this.savedPassword = localStorage.getItem('savedPassword') || '';
  }
}
