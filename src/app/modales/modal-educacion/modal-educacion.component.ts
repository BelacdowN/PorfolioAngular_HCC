import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionComponent } from 'src/app/components/educacion/educacion.component';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {
  form:FormGroup;
  estu:Estudio;
  constructor(private formBuilder: FormBuilder, 
              private sEstudio:EstudioService, 
              private activatedRoute:ActivatedRoute,
              private router:Router
              ) { 
    //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      estudio:['',[Validators.required]],
      inicio:[''],
      fin:[''],
      descripcion:['', [Validators.required]],
      imagen:[''],
      url:[''],
      institucion:[''],
      personaid:1,
   })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sEstudio.detail(id).subscribe(data => {
      this.estu=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
   }
 
   get Estudio(){
    return this.form.get("estudio");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }
 
 
  onUpdate():void{
    this.sEstudio.edit(this.form.value).subscribe(data => {
      alert("Estudio modificado.");
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
