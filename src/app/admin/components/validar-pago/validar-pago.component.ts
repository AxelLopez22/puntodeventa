import { Component, OnInit } from '@angular/core';
import { DetalleVenta, ProductosFactura, metodosPago } from '../../models/models';
import { categorias, productos } from '../../models/data';

@Component({
  selector: 'app-validar-pago',
  templateUrl: './validar-pago.component.html',
  styleUrls: ['./validar-pago.component.scss']
})
export class ValidarPagoComponent implements OnInit {

  detalleProductos: DetalleVenta[] = []
  detalleFactura: ProductosFactura[] = []
  metodoPago: metodosPago[] = []
  cambio: number = 0;
  constructor(){}
  
  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.metodoPago = JSON.parse(localStorage.getItem('tipoPago') || '[]')
    this.detalleProductos = JSON.parse(localStorage.getItem('items') || '[]');
    this.detalleProductos.forEach((producto) => {
      let detalleFact: ProductosFactura = {
        cantidad: 0,
        producto: '',
        precio: 0
      }; // Crear instancia de ProductosFactura
      let nombre = productos.find(x => x.id === producto.idProducto);
      detalleFact.cantidad = producto.cantidad
      detalleFact.producto = nombre?.nombre;
      detalleFact.precio = producto.precio;
      this.detalleFactura.push(detalleFact);
    });
    // this.metodoPago = JSON.parse(localStorage.getItem('tipoPago') || '[]')
  }

  nuevaOrden(){
    localStorage.removeItem('tipoPago');
    localStorage.removeItem('items');
  }

  ObtenerTotal(){
    let total = 0;
    for (var i = 0; i < this.detalleProductos.length; i++) {
      var detalle = this.detalleProductos[i];
      var subtotal = detalle.precio * detalle.cantidad;
      total += subtotal;
    }
    let importe = 0;
    this.metodoPago.forEach((pago) => {
      importe += pago.total
    })
    this.cambio = importe - total
    return total;
  }
}
