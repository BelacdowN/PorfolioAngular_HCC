import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-modal-experiencia-add',
  templateUrl: './modal-experiencia-add.component.html',
  styleUrls: ['./modal-experiencia-add.component.css']
})
export class ModalExperienciaAddComponent implements OnInit {
  form={
  puesto : '',
  inicio : '',
  fin : '',
  descripcion : '',
  imagen : '',
  url : '',
  empresa : '',
  esTrabajoActual : false
  };
  constructor(private sExperiencia: ExperienciaService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.form.puesto, this.form.inicio, this.form.fin, this.form.descripcion, this.form.imagen,
      this.form.url, this.form.empresa, this.form.esTrabajoActual);
      this.sExperiencia.save(expe).subscribe(data=>{alert("Experiencia Añadida")
      window.location.reload();
    }, err =>{
      alert("falló en la carga, intente nuevamente");
      window.location.reload();
    });
  }
  
  onReset(form: NgForm): void {
    form.reset();
  }
}
