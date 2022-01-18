import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nombre: string;
  urlImg: string;
  texto: string;
  isDisabled: boolean;
  titulo: string;
  titulo2: string;
  texto2: string;
  texto3: string;
  twoway: string;
  titulo3: string;

  constructor() {
    this.nombre = "Mauricio";
    this.urlImg = "https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg?size=626&ext=jpg";
    this.texto = "Escribe aqui";
    this.texto2 = "Componente hijo";
    this.texto3 = "texto en componente padre";
    this.isDisabled = false;
    this.titulo = "Event Binding";
    this.titulo2 = "Comunication b/components";
    this.titulo3 = "Two Way Binding";
    this.twoway = "dos caminos texto";
  }

  ngOnInit(): void {
  }

  getNombre(): string {
    return this.nombre
  }

  suma(num1: number, num2: number): number{
    return num1 + num2;
  }

  changeText():void{
    this.titulo === "Event Binding"
    ? this.titulo = "Binding Event"
    : this.titulo = "Event Binding"
  }

  changeTextCard():void {
    this.texto2 === "Componente hijo"
    ? this.texto2 = "texto cambiado!"
    : this.texto2 = "Componente hijo"
  }

  changeTextCard2(texto:string):void {
    this.texto3 = texto;
  }

  setInput():void {
    this.isDisabled = !this.isDisabled
  }

}