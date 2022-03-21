import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  public usuarioAutenticado: boolean = false;
  mostrarNavEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {

      this.usuarioAutenticado = true;
      this.mostrarNavEmitter.emit(true);
      this.router.navigate(['./dashboard']);
    }else {
      this.usuarioAutenticado = false;
      this.mostrarNavEmitter.emit(false);

    }
  }

  fazerLogout(){
    this.usuarioAutenticado = false;
    this.mostrarNavEmitter.emit(false);
    this.router.navigate(['./login']);

  }
  
}
