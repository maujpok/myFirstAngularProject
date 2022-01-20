import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  id:string;
  nombre: string;
  email: string;
  genero: string;
  status: string;
  cargando: boolean;

  constructor(private aRoute: ActivatedRoute, private usuarioService: UsuarioService) {
    this.nombre = "";
    this.email = "";
    this.genero = "";
    this.status = "";
    this.id = "";
    this.cargando = true;

    // this.id = this.aRoute.snapshot.paramMap.get('id')!;

    this.aRoute.queryParams.pipe(filter(params=>params['id'])).subscribe(params=> {
      this.id = params['id'];
    })

    this.usuarioService.getUsuario(this.id).subscribe(data => {
      this.cargando = false;
      this.nombre = data.data.name;
      this.email = data.data.email;
      this.genero = data.data.gender;
      this.status = data.data.status;
    })
  }

  ngOnInit(): void {
  }

}
