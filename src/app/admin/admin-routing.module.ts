import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosLayoutComponent } from './pages/pos-layout/pos-layout.component';
import { AdminComponent } from './admin.component';
import { PosPagarComponent } from './pages/pos-pagar/pos-pagar.component';
import { ValidarPagoComponent } from './components/validar-pago/validar-pago.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path: '', redirectTo: 'pcg/inicio', pathMatch: 'full'},
  {path: '', component: AdminComponent, children: [
    {path:'', component: InicioComponent},
    {path: 'pos', component: PosLayoutComponent},
    {path: 'pos/pagar', component: PosPagarComponent},
    {path: 'pos/pagar/validar', component: ValidarPagoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
