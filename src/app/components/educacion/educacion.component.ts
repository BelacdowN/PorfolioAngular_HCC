import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/services/estudio.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  isLogged:boolean=false;
  estudios: Estudio[]=[]; //se llama al modelo que es un array
  
  constructor(private tokenService: TokenService, private sEstudio:EstudioService) { }

  ngOnInit(): void {
    this.cargarEstudio();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarEstudio():void{
    this.sEstudio.lista().subscribe(data => {this.estudios=data});
  }

  delete(id:number){
    if(id != undefined){
      this.sEstudio.delete(id).subscribe(
        data =>{
          alert("Estudio eliminado correctamente")
          this.cargarEstudio();
        }, err =>{
          alert("no se pudo eliminar la educacion")
        })
    }}

}
