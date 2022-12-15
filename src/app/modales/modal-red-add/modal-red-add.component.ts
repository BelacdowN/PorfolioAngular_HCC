import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/services/red.service';

@Component({
  selector: 'app-modal-red-add',
  templateUrl: './modal-red-add.component.html',
  styleUrls: ['./modal-red-add.component.css']
})
export class ModalRedAddComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private sRed:RedService) { 
    //Creamos el grupo de controles para el formulario 
this.form= this.formBuilder.group({
  nombre:['',[Validators.required]],  
  url:['', [Validators.required]], 
  icono:['', [Validators.required]], 
  personaid:[1],
})
  }

  //declarar para las validaciones
  get Nombre(){
    return this.form.get("nombre");
  }

  get Url(){
    return this.form.get("url");
  }

  get Icono(){
    return this.form.get("icono");
  }
 
  ngOnInit(): void {
  }

  onCreate(): void{   
      this.sRed.save(this.form.value).subscribe(data=>{
      alert("Red Añadida");
      window.location.reload();
    }, err =>{
      alert("falló en la carga, intente nuevamente");
      this.form.reset();
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
