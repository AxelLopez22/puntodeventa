import { Component, Input, OnInit } from '@angular/core';
import { metodosPago } from '../../models/models';

@Component({
  selector: 'app-metodos-pago',
  templateUrl: './metodos-pago.component.html',
  styleUrls: ['./metodos-pago.component.scss']
})
export class MetodosPagoComponent implements OnInit {

  @Input() metodoPago: metodosPago = {
    id: 0,
    nombre: '',
    total: 0
  }

  constructor(){}

  ngOnInit(): void {
    
  }
}
