import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  isLogged = false;
  habilidades: Habilidad[]=[]; //se llama al modelo que es un array

  constructor(private tokenService: TokenService, private sHabilidad:HabilidadService) { }

  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHabilidad():void{
    this.sHabilidad.lista().subscribe(data => {
      this.habilidades=data
    });
  }

  delete(id:number){
    if(id != undefined){
      this.sHabilidad.delete(id).subscribe(
        data =>{
          alert("Habilidad eliminada correctamente")
          this.cargarHabilidad();
        }, err =>{
          alert("no se pudo eliminar la habilidad");
        })
    }}
}
