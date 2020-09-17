import { MensagemErroModule } from './../publico/componentes/mensagem-erro/mensagem-erro.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscreverSeComponent } from './inscrever-se.component';



@NgModule({
  declarations: [InscreverSeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MensagemErroModule
  ]
})
export class InscreverSeModule { }
