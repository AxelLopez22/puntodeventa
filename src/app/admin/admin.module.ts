import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PosLayoutComponent } from './pages/pos-layout/pos-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { ItemsShopComponent } from './components/items-shop/items-shop.component';
import { SectionButtonsComponent } from './components/section-buttons/section-buttons.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { AdminComponent } from './admin.component';
import { PosPagarComponent } from './pages/pos-pagar/pos-pagar.component';
import { MetodosPagoComponent } from './components/metodos-pago/metodos-pago.component';
import { ValidarPagoComponent } from './components/validar-pago/validar-pago.component';


@NgModule({
  declarations: [
    PosLayoutComponent,
    ItemsShopComponent,
    SectionButtonsComponent,
    ProductsComponent,
    CustomerComponent,
    AddClienteComponent,
    AdminComponent,
    NavbarComponent,
    PosPagarComponent,
    MetodosPagoComponent,
    ValidarPagoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule, 
    ToastrModule.forRoot()
  ]
})
export class AdminModule { }
