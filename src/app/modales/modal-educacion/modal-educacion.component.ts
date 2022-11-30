import { Component, OnInit } from '@angular/core';
import { EducacionComponent } from 'src/app/components/educacion/educacion.component';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {
  id: number ;
  estu :Estudio = null;
  constructor(private sEstudio:EstudioService, private insert:EducacionComponent) { }

  ngOnInit(): void {
    this.info()
   }
 
 info():void{
   this.id = this.insert.idEditar;
   this.sEstudio.detail(this.id).subscribe(data => 
     {this.estu=data},
     err =>{
       alert("Error al llamar los datos de educacion");
     });
 }
 
   onUpdate(): void{    
     this.sEstudio.update(this.estu.id, this.estu).subscribe(
       data=>{alert("Educación Modificada")
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
