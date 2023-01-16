import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosComponent } from 'src/app/components/proyectos/proyectos.component';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-modal-proyectos',
  templateUrl: './modal-proyectos.component.html',
  styleUrls: ['./modal-proyectos.component.css']
})
export class ModalProyectosComponent implements OnInit {
  form:FormGroup;
  proye :Proyecto;
  constructor(private formBuilder: FormBuilder, 
              private sProye:ProyectoService,
              private activatedRoute:ActivatedRoute,
              private router:Router
  ) { 
    //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
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
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProye.detail(id).subscribe(data => {
      this.proye=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate():void{
    this.sProye.edit(this.form.value).subscribe(data => {
      alert("Proyecto modificado.");
      this.router.navigate(['']);
    }
    )
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }
  

  
}
