import { Component, OnChanges, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit{
  id: number = 6;
  experiencia :Experiencia;
  constructor(private sExperiencia: ExperienciaService) { }
  
  
  ngOnInit(): void {
    
    this.sExperiencia.detail(this.id).subscribe(
      data =>{
        this.experiencia = data;
      }, err =>{
        alert("Error al llamar los datos de experiencia");
        window.location.reload();
      }
    )

  }

  onUpdate(): void{    
    this.sExperiencia.update(this.experiencia.id, this.experiencia).subscribe(
      data=>{alert("Experiencia Modificada")
    window.location.reload();      
    },err =>{
            alert("falló al modificar, intente nuevamente");
      window.location.reload();
    }
    )
}
}
