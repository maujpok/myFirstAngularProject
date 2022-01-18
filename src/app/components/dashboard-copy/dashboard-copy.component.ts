import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-copy',
  templateUrl: './dashboard-copy.component.html',
  styleUrls: ['./dashboard-copy.component.css']
})
export class DashboardCopyComponent implements OnInit {

  listaUsuarios: any[];
  texto:string;

  constructor() {
    this.listaUsuarios = [
      {nombre:"Alejandro Toro", email:"aletoro@mail.com", genero: "Masculino"},
      {nombre:"Alejandra Perez", email:"alep@mail.com", genero: "Femenino"},
      {nombre:"Marcos Luna", email:"mluna@mail.com", genero: "Masculino"},
      {nombre:"Antonela Tello", email:"atello@mail.com", genero: "Femenino"},
      {nombre:"Lucas Hiz", email:"lhiz@mail.com", genero: "X"},
      {nombre:"Lautaro Portillo", email:"lauti5@mail.com", genero: "Masculino"},
      {nombre:"Teresa Monserratt", email:"terem@mail.com", genero: "Femenino"}
    ];
  this.texto = "";
  }

  ngOnInit(): void {
  }

}