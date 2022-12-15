import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-modal-proyectos-add',
  templateUrl: './modal-proyectos-add.component.html',
  styleUrls: ['./modal-proyectos-add.component.css']
})
export class ModalProyectosAddComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private sproye:ProyectoService) {
    //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      proyecto:['',[Validators.required]],
      inicio:[''],
      fin:[''],
      descripcion:['',[Validators.required]],
      imagen:[''],
      url:[''],
      personaid:[1],
   })
   }

  get Proyecto(){
    return this.form.get("proyecto");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }
 


  get ProyectoValid(){
    return this.Proyecto.touched && !this.Proyecto.valid;
  }

  get DescripcionValid() {
    return this.Descripcion.touched && !this.Descripcion.valid;
  }

  
  ngOnInit(): void {
  }


  onCreate(): void{
      this.sproye.save(this.form.value).subscribe(data=>{
      alert("Proyecto Añadido");
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
