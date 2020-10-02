import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { MensagemErroModule } from './../publico/componentes/mensagem-erro/mensagem-erro.module';
import { AuthModule } from './../core/auth/auth.module';
import { TokenModule } from './../core/token/token.module';
import { LoginGuard } from './login.guard';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MensagemErroModule,
    AuthModule,
    TokenModule,
    RouterModule,
  ],
  providers: [LoginGuard],
})
export class LoginModule {}
