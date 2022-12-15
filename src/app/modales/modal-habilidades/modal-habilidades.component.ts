import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-modal-habilidades',
  templateUrl: './modal-habilidades.component.html',
  styleUrls: ['./modal-habilidades.component.css']
})
export class ModalHabilidadesComponent implements OnInit {
  form: FormGroup;
  habi:Habilidad=null;
  constructor(private formBuilder: FormBuilder, 
    private sHabilidad:HabilidadService, 
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { 
    //Creamos el grupo de controles para el formulario 
this.form= this.formBuilder.group({
  id:[''],
  habilidad:['',[Validators.required]],  
  porcentaje:['', [Validators.required, Validators.min(0), Validators.max(100)]],
  personaid:1,  
})
  }
//declarar para los campos
get Habilidad(){
  return this.form.get("habilidad");
}

get Porcentaje(){
  return this.form.get("porcentaje");
}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sHabilidad.detail(id).subscribe(data => {
      this.habi=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }
  onUpdate():void{
    this.sHabilidad.edit(this.form.value).subscribe(data => {
      alert("Habilidad modificada.");
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
