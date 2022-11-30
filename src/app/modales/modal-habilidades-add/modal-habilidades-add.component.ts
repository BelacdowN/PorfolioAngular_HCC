import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-modal-habilidades-add',
  templateUrl: './modal-habilidades-add.component.html',
  styleUrls: ['./modal-habilidades-add.component.css']
})
export class ModalHabilidadesAddComponent implements OnInit {
  form: FormGroup;
  habilidad : '';
  porcentaje : 0;

  constructor(private formBuilder: FormBuilder, private sHabilidad:HabilidadService) { 

///Creamos el grupo de controles para el formulario 
this.form= this.formBuilder.group({
  habilidad:['',[Validators.required]],  
  porcentaje:['', [Validators.required, Validators.min(0), Validators.max(100)]],  
})
}
  ngOnInit(): void {
  }
  //declarar para las validaciones
  get Habilidad(){
    return this.form.get("habilidad");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }
 //Validaciones
  get HabilidadValid(){
    return this.Habilidad.touched && !this.Habilidad.valid;
  }

  get PorcentajeValid() {
    return this.Porcentaje.touched && !this.Porcentaje.valid;
  }

  onCreate(): void{
    const habi = new Habilidad(this.habilidad, this.porcentaje);
      this.sHabilidad.save(habi).subscribe(data=>{
      alert("Habilidad Añadida");
      window.location.reload();
    }, err =>{
      alert("falló en la carga, intente nuevamente");
      this.form.reset();
    });
  }

  limpiar(): void{
    this.form.reset();
  }
}
