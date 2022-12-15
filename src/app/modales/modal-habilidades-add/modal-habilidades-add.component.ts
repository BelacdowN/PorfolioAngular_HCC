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

  constructor(private formBuilder: FormBuilder, private sHabilidad:HabilidadService) { 

//Creamos el grupo de controles para el formulario 
this.form= this.formBuilder.group({
  habilidad:['',[Validators.required]],  
  porcentaje:['', [Validators.required, Validators.min(0), Validators.max(100)]],  
  personaid:[1],
})
}
  ngOnInit(): void {
  }
  //declarar para los campos
  get Habilidad(){
    return this.form.get("habilidad");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

 

  onCreate(): void{
      this.sHabilidad.save(this.form.value).subscribe(data=>{
      alert("Habilidad Añadida");
      window.location.reload();
    });
  }

  limpiar(): void{
    this.form.reset();
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onCreate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }
}
