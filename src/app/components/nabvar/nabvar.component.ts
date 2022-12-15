import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/services/red.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {
  redes :Red[]=[];
  isLogged = false;
  constructor(private tokenService: TokenService, private sRed:RedService) { }

  ngOnInit(): void {
   this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHabilidad():void{
    this.sRed.listaPer(1).subscribe(data => {
      this.redes=data});
  }

}
