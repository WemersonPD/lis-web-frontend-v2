import { InscreverSeModule } from './inscrever-se/inscrever-se.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginModule } from './login/login.module';
import { CabecalhoModule } from './core/cabecalho/cabecalho.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CabecalhoModule,
    InscreverSeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
