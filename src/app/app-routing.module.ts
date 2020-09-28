import { InscreverSeComponent } from './inscrever-se/inscrever-se.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadArquivoComponent } from './upload-arquivo/upload-arquivo.component';
import { SeguroIndividualPlanoFormComponent } from './seguro-individual-plano/seguro-individual-plano-form/seguro-individual-plano-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'inscrever-se', component: InscreverSeComponent },
  { path: 'upload-arquivo', component: UploadArquivoComponent },
  {
    path: 'seguro-individual-plano-form',
    component: SeguroIndividualPlanoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
