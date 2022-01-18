import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // @Input() textCard: string;
  // @Output() nuevoEvento = new EventEmitter<string>()

  @Input() nuevoTexto!: string;
  @Output() nuevoTextoChange = new EventEmitter<string>();

  constructor() {
    // this.textCard="";
  }

  ngOnInit(): void {
  }

  // cambiarTextoPadre(texto: string): void {
  //   this.nuevoEvento.emit(texto);
  // }

  cambiarTexto2way(texto:string): void {
    this.nuevoTextoChange.emit(texto)
  }

}