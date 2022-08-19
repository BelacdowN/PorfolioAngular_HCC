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
import { ModalesComponent } from './components/modales/modales.component';
import { IntroComponent } from './components/intro/intro.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { LogoapComponent } from './components/menu/logoap/logoap.component';
import { RedesComponent } from './components/menu/redes/redes.component';
import { LoginComponent } from './components/menu/login/login.component';
import { LogoutComponent } from './components/menu/logout/logout.component';
import { ModalLoginComponent } from './components/menu/login/modal-login/modal-login.component';
import { BannerComponent } from './components/sobremi/sobremicomp/banner/banner.component';
import { ProfileimgComponent } from './components/sobremi/sobremicomp/profileimg/profileimg.component';

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
    ModalesComponent,
    IntroComponent,
    EdicionComponent,
    LogoapComponent,
    RedesComponent,
    LoginComponent,
    LogoutComponent,
    ModalLoginComponent,
    BannerComponent,
    ProfileimgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
