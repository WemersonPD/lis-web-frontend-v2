import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadArquivoComponent } from './upload-arquivo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UploadArquivoComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class UploadArquivoModule {}
