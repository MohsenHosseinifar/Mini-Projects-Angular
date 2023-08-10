import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthButtonsComponent } from './auth-buttons/auth-buttons.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { UserInfoComponent } from './user-info/user-info.component';
// این خط را اضافه کنید
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LackOfEmploymentComponent } from './lack-of-employment/lack-of-employment.component';
/* import { KhadamatComponent } from './khadamat/khadamat.component';  کامپوننت روتینگ*/

import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

const routes: Routes = [
  // مسیر جدید برای نمایش اطلاعات کاربر
  { path: 'user-info', component: UserInfoComponent },
  { path: 'LackOfEmploymentComponent', component: LackOfEmploymentComponent }
  /* { path: 'khadamat', component: KhadamatComponent }, کامپوننت روتینگ */
  // ... سایر مسیرها
];
// ... بقیه import ها ...

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthButtonsComponent,
    LackOfEmploymentComponent,
  /*   KhadamatComponent, گامپوننا روتینگ */
  ],
  imports: [
    MatSelectModule,
    MatOptionModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    UserInfoComponent,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
