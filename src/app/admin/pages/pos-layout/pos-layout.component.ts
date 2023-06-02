import { AfterViewInit, Component, ElementRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { productos, categorias } from "../../models/data"
import { Categorias, DetalleVenta, Products } from '../../models/models';
import { ToastrService } from 'ngx-toastr';
import { AddClienteComponent } from '../../components/add-cliente/add-cliente.component';

@Component({
  selector: 'app-pos-layout',
  templateUrl: './pos-layout.component.html',
  styleUrls: ['./pos-layout.component.scss']
})
export class PosLayoutComponent implements OnInit {
  @ViewChild("modalTitle") modalTitle!: ElementRef;
  @ViewChild("container", {read: ViewContainerRef, static: true}) 
  container!: ViewContainerRef;

  products: Products[] = [];
  categorias: Categorias[] = [];
  detalleProducto: DetalleVenta[] = [];

  idSelectProduct = 0;
  nuevaCantidad: number = 0;
  tempCantidad: number = 0;

  cambiarCantidad: boolean = true;
  cambiarPrecio: boolean = false;
  agregarDescuento: boolean = false;

  selectedColor: string | null = null;
  customer:string = ''

  constructor(private toastr: ToastrService){
    this.customer = localStorage.getItem('cliente') || "";
  }

  ngOnInit(): void { 
    this.detalleProducto = JSON.parse(localStorage.getItem('items') || '[]')
    this.categorias = categorias
  }

  ObtenerNombre(){
    this.customer = localStorage.getItem('cliente') || ""
  }

  GetProduct(producto: DetalleVenta){
    this.detalleProducto.push(producto);
  }

  ObtenerTotal(){
    let total = 0;
    for (var i = 0; i < this.detalleProducto.length; i++) {
      var detalle = this.detalleProducto[i];
      var subtotal = detalle.precio * detalle.cantidad;
      total += subtotal;
    }
    return total;
  }

  AddLocalStorage(){
    let element = this.detalleProducto
    localStorage.setItem('items', JSON.stringify(element))
  }

  agregarNumero(cant: number){
    var idProducto = this.idSelectProduct

    if(this.cambiarCantidad === true && this.cambiarPrecio === false && this.agregarDescuento === false){
      var index = this.detalleProducto.findIndex((detalle) => {
        if(detalle.idProducto === idProducto){
          this.nuevaCantidad = this.nuevaCantidad * 10 + cant;
          detalle.cantidad = this.nuevaCantidad
        }
        return detalle.idProducto === idProducto;
      });
      
      if (index !== -1) {
  
      } else {
        this.showAlert("Error", "No has seleccionado producto");
      }
    } else if(this.cambiarCantidad === false && this.cambiarPrecio === true && this.agregarDescuento === false){
      var index = this.detalleProducto.findIndex((detalle) => {
        if(detalle.idProducto === idProducto){
          this.nuevaCantidad = this.nuevaCantidad * 10 + cant;
          detalle.precio = this.nuevaCantidad
        }
        return detalle.idProducto === idProducto;
      });
      
      if (index !== -1) {
  
      } else {
        this.showAlert("Error", "No has seleccionado producto");
      }
    }
  }

  selectProduct(id: number){
    this.idSelectProduct = id;
    this.nuevaCantidad = 0;
    if (id === this.idSelectProduct) {
      return 'color';
    } else {
      return '';
    }
  }

  ChangePrice(){
    this.cambiarCantidad = false;
    this.cambiarPrecio = true;
    this.agregarDescuento = false;
  }

  AddDescuento(){
    this.cambiarCantidad = false;
    this.cambiarPrecio = false;
    this.agregarDescuento = true;
  }

  EliminarProducto(){
    var idProducto = this.idSelectProduct

    var index = this.detalleProducto.findIndex(function(detalle) {
      return detalle.idProducto === idProducto;
    });
    
    if (index !== -1) {
      this.detalleProducto.splice(index, 1);
      this.showAlert("Ok", "Producto eliminado de la factura");
    } else {
      this.showAlert("Error", "No has seleccionado producto");
    }
  }

  openModal(name: string){
    this.container.clear();
    let componentType!: Type<any>;
    if(name === 'addCliente'){
      componentType = AddClienteComponent;
      this.modalTitle.nativeElement.textContent = 'Agregar Cliente';
    }
    this.container.createComponent(componentType);
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

  //Seccion de butones numericos

}
