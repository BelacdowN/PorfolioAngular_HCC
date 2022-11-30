import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  isLogged = false;
  experiencias: Experiencia[]=[]; //se llama al modelo que es un array
  idEditar : number;
  isTrue = false;

  constructor(private tokenService: TokenService, private sExperiencia: ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {this.experiencias=data});
  }

idEdit(id:number){
  this.isTrue = true;
  this.idEditar = id;
}

  delete(id:number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data =>{
          // alert("Experiencia Eliminada correctamente")
          this.cargarExperiencia();
        }, err =>{
          alert("no se pudo eliminar la experiencia")
        })
    }}
  
  
}
