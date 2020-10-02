import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguroIndividualPlanoService } from './seguro-individual-plano.service';
import { SeguroIndividualPlanoFormModule } from './seguro-individual-plano-form/seguro-individual-plano-form.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SeguroIndividualPlanoFormModule],
  providers: [SeguroIndividualPlanoService],
})
export class SeguroIndividualPlanoModule {}
