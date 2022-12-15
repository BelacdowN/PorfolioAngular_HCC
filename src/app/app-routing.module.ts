import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { ModalEducacionComponent } from './modales/modal-educacion/modal-educacion.component';
import { ModalExperienciaComponent } from './modales/modal-experiencia/modal-experiencia.component';
import { ModalHabilidadesComponent } from './modales/modal-habilidades/modal-habilidades.component';
import { ModalPerfilComponent } from './modales/modal-perfil/modal-perfil.component';
import { ModalProyectosComponent } from './modales/modal-proyectos/modal-proyectos.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'editPerfil/:id', canActivate:[GuardGuard], component: ModalPerfilComponent},
  {path: 'editExperiencia/:id', canActivate: [GuardGuard],  component: ModalExperienciaComponent},
  {path: 'editEducacion/:id', canActivate: [GuardGuard], component: ModalEducacionComponent},
  {path: 'editHabilidad/:id', canActivate: [GuardGuard], component: ModalHabilidadesComponent},
  {path: 'editProyecto/:id', canActivate: [GuardGuard], component: ModalProyectosComponent},
  {path: '**', component: Pagina404Component} 
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
