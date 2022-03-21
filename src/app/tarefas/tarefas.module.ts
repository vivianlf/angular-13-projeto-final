import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared/tarefa.service';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar/editar-tarefa.component';
import { FavoritarTarefaComponent } from './favoritar/favoritar-tarefa.component';
import { ConcluirTarefaComponent } from './concluir/concluir-tarefa.component';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';


@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    FavoritarTarefaComponent,
    ConcluirTarefaComponent,
    TarefaConcluidaDirective,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

  providers:[
    TarefaService
  ],

  exports: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    FavoritarTarefaComponent,
    ConcluirTarefaComponent
  ]
})
export class TarefasModule { }
