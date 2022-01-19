import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-copy',
  templateUrl: './card-copy.component.html',
  styleUrls: ['./card-copy.component.css']
})
export class CardCopyComponent implements OnInit {

  @Input() user: any;
  nombre:string;
  email:string;
  genero:string;

  constructor() {
    this.nombre = "";
    this.email = "";
    this.genero = "";
  }

  ngOnInit(): void {
    this.nombre=this.user.name;
    this.email=this.user.email;
    this.genero=this.user.gender;
  }
}