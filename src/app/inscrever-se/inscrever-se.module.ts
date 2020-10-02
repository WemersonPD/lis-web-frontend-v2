import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InscreverSeComponent } from './inscrever-se.component';
import { UsuarioModule } from '../core/usuario/usuario.module';
import { MensagemErroModule } from './../publico/componentes/mensagem-erro/mensagem-erro.module';

@NgModule({
  declarations: [InscreverSeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MensagemErroModule,
    UsuarioModule,
    RouterModule,
  ],
})
export class InscreverSeModule {}
