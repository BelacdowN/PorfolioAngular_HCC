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
import { LogoapComponent } from './components/menu/logoap/logoap.component';
import { RedesComponent } from './components/menu/redes/redes.component';
import { LoginComponent } from './components/menu/login/login.component';
import { LogoutComponent } from './components/menu/logout/logout.component';
import { ModalLoginComponent } from './components/menu/login/modal-login/modal-login.component';
import { BannerComponent } from './components/sobremi/sobremicomp/banner/banner.component';
import { ProfileimgComponent } from './components/sobremi/sobremicomp/profileimg/profileimg.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { IndexComponent } from './components/index/index.component';

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
    LogoapComponent,
    RedesComponent,
    LoginComponent,
    LogoutComponent,
    ModalLoginComponent,
    BannerComponent,
    ProfileimgComponent,
    Pagina404Component,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
