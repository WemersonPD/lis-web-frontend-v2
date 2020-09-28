import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SeguroIndividualPlanoFormComponent } from './seguro-individual-plano-form.component';
import { MensagemErroModule } from 'src/app/publico/componentes/mensagem-erro/mensagem-erro.module';

@NgModule({
  declarations: [SeguroIndividualPlanoFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MensagemErroModule],
})
export class SeguroIndividualPlanoFormModule {}
