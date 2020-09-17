import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UsuarioService } from './usuario.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [UsuarioService]
})
export class UsuarioModule {}
