import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-pagina404',
  templateUrl: './pagina404.component.html',
  styleUrls: ['./pagina404.component.css']
})
export class Pagina404Component implements OnInit {
  isLogged = false;
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

}
