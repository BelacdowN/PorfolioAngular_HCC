import { Component, OnChanges, OnInit } from '@angular/core';
import { ExperienciaComponent } from 'src/app/components/experiencia/experiencia.component';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit{
  id: number ;
  experiencia :Experiencia = null;
  constructor(private sExperiencia: ExperienciaService,
              private insert: ExperienciaComponent
    ) { }
  
  
  ngOnInit(): void {
   this.info()
  }

info():void{
  this.id = this.insert.idEditar;
  this.sExperiencia.detail(this.id).subscribe(data => 
    {this.experiencia=data},
    err =>{
      alert("Error al llamar los datos de experiencia");
    });
}

  onUpdate(): void{    
    this.sExperiencia.update(this.experiencia.id, this.experiencia).subscribe(
      data=>{alert("Experiencia Modificada")
    window.location.reload();      
    },err =>{
            alert("falló al modificar, intente nuevamente");
      window.location.reload();
    }
    )}

    cerrar(): void{
      window.location.reload();
    }
}
