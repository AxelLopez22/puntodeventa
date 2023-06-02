import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../models/models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.scss']
})
export class AddClienteComponent implements OnInit{

  registerForm!: FormGroup;
  message = "";
  clientes: Cliente[] = [];

  displayedColumns: string[] = [
    'nombres', 'apellidos', 'direccion', 'celular','correo', 'dni', 'acciones'
  ];
  dataSource = new MatTableDataSource<Cliente>(this.clientes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fb: FormBuilder){
    this.registerForm = fb.group({
      nombres: ['',[Validators.required]],
      apellidos: ['', [Validators.required]],
      telefono: [''],
      correo: [''],
      direccion: ['']
    });
  }

  ngOnInit(): void {
    
  }
  
  register(){
    let element:Cliente = {
      idCliente: 1,
      Nombre: this.registerForm.get('nombres')?.value,
      Apellidos: this.registerForm.get('apellidos')?.value
    }
    
    localStorage.setItem('cliente', element.Nombre);
    console.log(element);
  }

  get Nombres(): FormControl {
    return this.registerForm.get('nombres') as FormControl;
  }
  get Apellidos():FormControl {
    return this.registerForm.get('apellidos') as FormControl;
  }
}
