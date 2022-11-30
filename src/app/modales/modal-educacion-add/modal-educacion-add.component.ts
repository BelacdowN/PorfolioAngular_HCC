import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-modal-educacion-add',
  templateUrl: './modal-educacion-add.component.html',
  styleUrls: ['./modal-educacion-add.component.css']
})
export class ModalEducacionAddComponent implements OnInit {
  form: FormGroup;
  estudio : '';
  inicio : '';
  fin : '';
  descripcion : '';
  imagen : '';
  url : '';
  institucion : '';
  constructor(private formBuilder: FormBuilder, private sEstudio: EstudioService) { 
    ///Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      estudio:['',[Validators.required]],
      inicio:[''],
      fin:[''],
      descripcion:['', [Validators.required]],
      imagen:[''],
      url:[''],
      institucion:[''],
   })
  }

  ngOnInit(): void {
  }

  get Estudio(){
    return this.form.get("estudio");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }
 


  get EstudioValid(){
    return this.Estudio.touched && !this.Estudio.valid;
  }

  get DescripcionValid() {
    return this.Descripcion.touched && !this.Descripcion.valid;
  }

  onCreate(): void{
    const estu = new Estudio(this.estudio, this.inicio, this.fin, this.descripcion, this.imagen, this.url, this.institucion);
      this.sEstudio.save(estu).subscribe(data=>{
      alert("Estudio Añadido");
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
