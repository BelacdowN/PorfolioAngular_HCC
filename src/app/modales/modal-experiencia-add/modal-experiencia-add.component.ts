import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-modal-experiencia-add',
  templateUrl: './modal-experiencia-add.component.html',
  styleUrls: ['./modal-experiencia-add.component.css']
})
export class ModalExperienciaAddComponent implements OnInit {
  puesto : string ='';
  inicio : string ='';
  fin : string ='';
  descripcion : string='';
  imagen : string='';
  url : string='';
  empresa : string='';
  esTrabajoActual : boolean = false;
  constructor(private sExperiencia: ExperienciaService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.puesto, this.inicio, this.fin, this.descripcion, this.imagen,
      this.url, this.empresa, this.esTrabajoActual);
      this.sExperiencia.save(expe).subscribe(data=>{alert("Experiencia Añadida")
      window.location.reload();
    }, err =>{
      alert("falló en la carga, intente nuevamente");
      window.location.reload();
    });
  }

}
