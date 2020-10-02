import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { MensagemErroModule } from './../publico/componentes/mensagem-erro/mensagem-erro.module';
import { AuthModule } from './../core/auth/auth.module';
import { TokenModule } from './../core/token/token.module';
import { LoginGuard } from './login.guard';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MensagemErroModule,
    AuthModule,
    TokenModule,
  ],
  providers: [LoginGuard],
})
export class LoginModule {}
