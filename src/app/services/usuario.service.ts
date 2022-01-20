import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // private nuevoTexto = new Subject<string>();
  texto: string;

  constructor(private http: HttpClient) {
    this.texto = "";
  }

  getUsuarios(pagina: number): Observable<any> {
    const Url = "https://gorest.co.in/public/v1/users?page=" + pagina;
    return this.http.get(Url)
  }

  getUsuario(id: any): Observable<any> {
    const Url = "https://gorest.co.in/public/v1/users/" + id;
    return this.http.get(Url)
  }
  // modificarTexto(texto: string): void {
  //   this.nuevoTexto.next(texto)
  // }

  // getTexto(): Observable<string> {
  //   return this.nuevoTexto.asObservable();
  // }
}
