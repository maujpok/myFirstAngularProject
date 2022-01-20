import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardCopyComponent } from './components/dashboard-copy/dashboard-copy.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListadoUsuariosComponent } from './components/dashboard-copy/listado-usuarios/listado-usuarios.component';
import { UsuarioComponent } from './components/dashboard-copy/usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent},
  { path: 'dashboard', component: DashboardCopyComponent, children: [
    {path:'', component: ListadoUsuariosComponent},
    // {path: 'usuario/:id', component: UsuarioComponent}
    {path: 'usuario', component: UsuarioComponent}
  ]},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
