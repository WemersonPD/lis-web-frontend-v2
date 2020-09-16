import { MensagemErroModule } from './../publico/componentes/mensagem-erro/mensagem-erro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MensagemErroModule
  ]
})
export class LoginModule { }
