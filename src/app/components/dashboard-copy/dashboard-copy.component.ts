import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard-copy',
  templateUrl: './dashboard-copy.component.html',
  styleUrls: ['./dashboard-copy.component.css']
})
export class DashboardCopyComponent implements OnInit {

  listaUsuarios: any;
  

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
  }
  // onChange(evento: string): void {
  //   this.usuarioService.modificarTexto(this.texto);
  // }
}