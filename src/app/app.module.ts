import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora/calculadora.module';
import { ConversorModule } from './conversor/conversor.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { JogoDaVelhaModule } from './jogo-da-velha/jogo-da-velha.module';
import { AuthService } from './login/auth.service';
import { LoginModule } from './login/login.module';
import { TarefasModule } from './tarefas/tarefas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    ConversorModule,
    TarefasModule,
    JogoDaVelhaModule,
    LoginModule,
    AppRoutingModule
 
  ],

  exports: [
    AppComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
