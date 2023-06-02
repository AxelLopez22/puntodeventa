import { Component, OnInit } from '@angular/core';
import { DetalleVenta, metodosPago } from '../../models/models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pos-pagar',
  templateUrl: './pos-pagar.component.html',
  styleUrls: ['./pos-pagar.component.scss']
})
export class PosPagarComponent implements OnInit {

  detalleProductos: DetalleVenta[] = [];
  metodosPagos: metodosPago[] = [];
  restante: number = 0;
  cambio: number = 0;
  total: number = 0;
  numero: number = 0;

  totalPrevio: number = 0
  idMetodoPago: number = 0;

  metodoEfectivo: boolean = false;
  metodoTarjeta: boolean = false;

  constructor(private toastr: ToastrService){}

  ngOnInit(): void {
    this.ObtenerTotalProductos();
  }

  ObtenerTotalProductos(){
    this.detalleProductos = JSON.parse(localStorage.getItem('items') || '[]')
    let total = 0;
    for (var i = 0; i < this.detalleProductos.length; i++) {
      var detalle = this.detalleProductos[i];
      var subtotal = detalle.precio * detalle.cantidad;
      total += subtotal;
    }
    this.total = total
    return total;
  }

  agregarNumero(numero: number){
    let metodoPago = this.idMetodoPago;

    var index = this.metodosPagos.findIndex((pago) => {
      if(pago.id === metodoPago){
        let cantidadOriginal = this.total;
        this.numero = this.numero * 10 + numero;
        this.totalPrevio = this.total - this.numero;

        this.metodosPagos.forEach((pago) => {
          pago.total = this.numero
          console.log(pago.total);  
        });

        if(this.totalPrevio < 0){
          this.restante = 0;
        } else{
          this.restante = this.totalPrevio;
          pago.total = this.numero;
        } 

        if(this.numero > cantidadOriginal){
          this.cambio = this.numero - cantidadOriginal
        } else {
          this.cambio = 0;
        }
      }
      return pago.id === metodoPago;
    })
    
    if (index !== -1) {
    } else {
      this.showAlert("Error", "No has seleccionado metodo de pago");
    }
  }

  borrar(){
    
  }

  capturarMetodoPago(id: number){
    this.numero = 0;
    this.total = this.totalPrevio;
    this.idMetodoPago = id;
  }

  validarPago(){
    localStorage.setItem("tipoPago", JSON.stringify(this.metodosPagos))
  }

  seleccionarMetodoPago(name: string){
    this.numero = 0;
    let elemento: metodosPago = {
      id: 0,
      nombre: '',
      total: 0
    }

    if(name === "Efectivo"){
      elemento.id = 1;
      elemento.nombre = "Efectivo";
      elemento.total = this.numero;
      this.idMetodoPago = 1;
      this.metodosPagos.push(elemento);
    }
    if(name === "Tarjeta"){
      elemento.id = 2;
      elemento.nombre = "Tarjeta";
      elemento.total = this.numero;
      this.idMetodoPago = 2;
      this.metodosPagos.push(elemento);
    }
    
  }

  showAlert(status: string, mensaje: string){
    status === "Ok" ? this.toastr.success(`${mensaje}`, "", {
      timeOut: 2000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      easing: 'ease-in',
      easeTime: 300
    }) : this.toastr.error(`${mensaje}`, "", {
      timeOut: 2000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      easing: 'ease-in',
      easeTime: 300
    })
  }
}
