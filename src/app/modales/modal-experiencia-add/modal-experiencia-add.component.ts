import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-modal-experiencia-add',
  templateUrl: './modal-experiencia-add.component.html',
  styleUrls: ['./modal-experiencia-add.component.css']
})
export class ModalExperienciaAddComponent implements OnInit {
  
  form:FormGroup;
  
  constructor(private formBuilder: FormBuilder, private sExperiencia: ExperienciaService) {
     //Creamos el grupo de controles para el formulario 
     this.form= this.formBuilder.group({
      puesto:['',[Validators.required]],
      inicio:[''],
      fin:[''],
      descripcion:['',[Validators.required]],
      imagen:[''],
      url:[''],
      empresa:[''],
      esTrabajoActual :[''],     
      personaid:[1],
   })
   }

  ngOnInit(): void {
  }

  get Puesto(){
    return this.form.get("puesto");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }
 
  onCreate(): void{
      this.sExperiencia.save(this.form.value).subscribe(data=>{alert("Experiencia Añadida")
      window.location.reload();
    });
  }
  
  limpiar(): void{
    this.form.reset();
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCreate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }
}
