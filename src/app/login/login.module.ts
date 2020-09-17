import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { MensagemErroModule } from './../publico/componentes/mensagem-erro/mensagem-erro.module';
import { AuthModule } from './../core/auth/auth.module';
import { TokenModule } from './../core/token/token.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MensagemErroModule,
    AuthModule,
    TokenModule,
  ]
})
export class LoginModule { }
