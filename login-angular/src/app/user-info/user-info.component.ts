import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatMenuModule,
  ],
})
export class UserInfoComponent implements OnInit {
  enteredUsername: string = '';
  enteredPassword: string = '';
  darkMode = false;
  isLoggedIn = false; // A new property to track login status
  router: Router;

  constructor(public userService: UserService, private routerInstance: Router) {
    this.router = routerInstance;
}
  ngOnInit(): void {
    // Load saved credentials from local storage
    this.userService.savedUsernameSubject.subscribe((username) => {
      this.enteredUsername = username || '';
      this.checkLoginStatus(); // Check login status after updating username
    });
    this.userService.savedPasswordSubject.subscribe((password) => {
      this.enteredPassword = password || '';
      this.checkLoginStatus(); // Check login status after updating password
    });

    // Check initial login status
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.isLoggedIn =
      this.enteredUsername !== '' && this.enteredPassword !== '';
  }

  saveCredentials(): void {
    this.userService.saveCredentials(
      this.enteredUsername,
      this.enteredPassword
    );
    this.isLoggedIn = true; // User is now logged in after saving credentials
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
  
  adameshtegal(){
    this.router.navigate(['/LackOfEmploymentComponent']);
  }
}
