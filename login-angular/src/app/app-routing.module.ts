import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // دیگر مسیرها اینجا قرار می‌گیرند
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user-info', component: UserInfoComponent } // مسیر جدید برای نمایش اطلاعات کاربر
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
