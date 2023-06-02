import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: 'pcg/pos', pathMatch: 'full'},
  {path:'pcg/pos', loadChildren: () => import('../app/admin/admin.module').then(x => x.AdminModule)},
  {path: 'pcg/auth', loadChildren: () => import('../app/auth/auth.module').then(x => x.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
