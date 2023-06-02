import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetalleVenta } from '../../models/models';
import { productos, categorias } from '../../models/data';

@Component({
  selector: 'app-items-shop',
  templateUrl: './items-shop.component.html',
  styleUrls: ['./items-shop.component.scss']
})
export class ItemsShopComponent implements OnInit, AfterViewInit {

  @Input() productoDetalle: DetalleVenta = {
    id: 0,
    cantidad: 0,
    precio: 0,
    idProducto: 0
  }

  constructor(){}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
  }

  obtenerNombreProducto(){
    let producto = productos.find(x => x.id === this.productoDetalle.idProducto);
    return producto?.nombre
  }
}
