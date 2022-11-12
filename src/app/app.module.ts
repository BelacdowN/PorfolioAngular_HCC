import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/menu/login/login.component';
import { LogoutComponent } from './components/menu/logout/logout.component';
import { ModalLoginComponent } from './components/menu/login/modal-login/modal-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { IndexComponent } from './components/index/index.component';
import { ModalBannerComponent } from './modales/modal-banner/modal-banner.component';
import { ModalPerfilComponent } from './modales/modal-perfil/modal-perfil.component';
import { ModalSobremiComponent } from './modales/modal-sobremi/modal-sobremi.component';
import { ModalExperienciaComponent } from './modales/modal-experiencia/modal-experiencia.component';
import { ModalEducacionComponent } from './modales/modal-educacion/modal-educacion.component';
import { ModalHabilidadesComponent } from './modales/modal-habilidades/modal-habilidades.component';
import { ModalProyectosComponent } from './modales/modal-proyectos/modal-proyectos.component';
import { ModalEducacionAddComponent } from './modales/modal-educacion-add/modal-educacion-add.component';
import { ModalExperienciaAddComponent } from './modales/modal-experiencia-add/modal-experiencia-add.component';
import { ModalHabilidadesAddComponent } from './modales/modal-habilidades-add/modal-habilidades-add.component';
import { ModalProyectosAddComponent } from './modales/modal-proyectos-add/modal-proyectos-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    SobremiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    ModalLoginComponent,
    Pagina404Component,
    IndexComponent,
    ModalBannerComponent,
    ModalPerfilComponent,
    ModalSobremiComponent,
    ModalExperienciaComponent,
    ModalEducacionComponent,
    ModalHabilidadesComponent,
    ModalProyectosComponent,
    ModalEducacionAddComponent,
    ModalExperienciaAddComponent,
    ModalHabilidadesAddComponent,
    ModalProyectosAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
