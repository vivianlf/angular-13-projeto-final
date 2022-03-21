import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto Final';

  mostrarNav: boolean = false;

  constructor(
    
    private authService: AuthService,
    private router: Router

    
    ){

  }

  ngOnInit (){
    this.authService.mostrarNavEmitter.subscribe(
      mostrar => this.mostrarNav = mostrar
    );
  }

fazerLogout(){
  this.authService.fazerLogout;
  this.mostrarNav = false;
  this.router.navigate(['./login']);
}
  
}
