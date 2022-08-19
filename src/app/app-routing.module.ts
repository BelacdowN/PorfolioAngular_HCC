import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { EdicionComponent } from './components/edicion/edicion.component';

const routes: Routes = [
  {path: 'intro', component:IntroComponent},
  {path: 'edicion', component:EdicionComponent},
  {path: '', redirectTo: '/intro', pathMatch:'full'}  
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
