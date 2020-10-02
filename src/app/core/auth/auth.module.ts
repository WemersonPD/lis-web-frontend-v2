import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UsuarioModule } from '../usuario/usuario.module';

@NgModule({
  imports: [HttpClientModule, UsuarioModule],
  providers: [AuthService, AuthGuard],
})
export class AuthModule {}
