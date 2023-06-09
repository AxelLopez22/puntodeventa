import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckAuthGuard } from './auth/guards/check-auth.guard';
import { LoginGuard } from './auth/guards/login.guard';

const routes: Routes = [
  {path:'', redirectTo: 'pcg/pos', pathMatch: 'full'},
  {path:'pcg/inicio', loadChildren: () => import('../app/admin/admin.module').then(x => x.AdminModule), canActivate: [CheckAuthGuard]},
  {path: 'pcg/auth', loadChildren: () => import('../app/auth/auth.module').then(x => x.AuthModule), canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
