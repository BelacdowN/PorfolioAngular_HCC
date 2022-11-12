import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  // exp :Experiencia = null;
  // id : number =0;
  constructor(private sExperiencia: ExperienciaService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  //   const id = this.activatedRoute.snapshot.params['id'];
  //   this.sExperiencia.detail(this.id).subscribe(
  //     data=>{this.exp = data
  //     }, err=>{
  //       alert("falló al modificar, intente nuevamente");
  // window.location.reload();
  //     }
    //)
  }

//   onUpdate(): void{
//     const id = this.activatedRoute.snapshot.params['id'];
//     this.sExperiencia.update(id, this.exp).subscribe(data=>{alert("Experiencia Modificada")
//     window.location.reload();      
//     },err =>{
//             alert("falló al modificar, intente nuevamente");
//       window.location.reload();
//     }
//     )
// }
}
