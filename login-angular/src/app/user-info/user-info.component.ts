import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatButtonToggleModule],
})
export class UserInfoComponent implements OnInit {
  enteredUsername: string = '';
  enteredPassword: string = '';
  darkMode = false;
 
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.savedUsernameSubject.subscribe(username => this.enteredUsername = username || '');
    this.userService.savedPasswordSubject.subscribe(password => this.enteredPassword = password || '');
   
  }
  saveCredentials(): void {
    this.userService.saveCredentials(this.enteredUsername, this.enteredPassword);
  }
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
