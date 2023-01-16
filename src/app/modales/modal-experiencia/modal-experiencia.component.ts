import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit{
  form:FormGroup;
  experiencia :Experiencia;
  constructor(private formBuilder: FormBuilder,
              private sExperiencia: ExperienciaService,
              private activatedRoute:ActivatedRoute,
              private router:Router
    ) { 
      //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      puesto:['',[Validators.required]],
      inicio:[''],
      fin:[''],
      descripcion:['', [Validators.required]],
      imagen:[''],
      url:[''],
      empresa:[''],
      esTrabajoActual:[''],
      personaid:1,
   })
    }
  
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(data => {
      this.experiencia=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get Puesto(){
    return this.form.get("puesto");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }
 
  


  onUpdate():void{
    this.sExperiencia.edit(this.form.value).subscribe(data => {
      alert("Experiencia modificada.");
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
