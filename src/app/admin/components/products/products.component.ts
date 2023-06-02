import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetalleVenta, Products } from '../../models/models';
import { categorias, productos } from '../../models/data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() product: Products = {
    id: 0,
    nombre: "",
    descripcion: "",
    precio: 0,
    img: "",
    idCategoria: 0
  }

  @Output()AddProduct: EventEmitter<DetalleVenta> = new EventEmitter();
  constructor(){}

  ngOnInit(): void {
    
  }

  AgregarProducto(id: number){
    let producto = productos.find(x => x.id === id);
    let productEmit: DetalleVenta = {
      id: 0,
      cantidad: 1,
      precio: producto?.precio || 1,
      idProducto: id
    } 
    this.AddProduct.emit(productEmit);
  }
}
