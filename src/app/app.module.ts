import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginModule } from './login/login.module';
import { CabecalhoModule } from './core/cabecalho/cabecalho.module';
import { InscreverSeModule } from './inscrever-se/inscrever-se.module';
import { UploadArquivoModule } from './upload-arquivo/upload-arquivo.module';
import { SeguroIndividualPlanoModule } from './seguro-individual-plano/seguro-individual-plano.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CabecalhoModule,
    InscreverSeModule,
    UploadArquivoModule,
    SeguroIndividualPlanoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
