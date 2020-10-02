import { InscreverSeComponent } from './inscrever-se/inscrever-se.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadArquivoComponent } from './upload-arquivo/upload-arquivo.component';
import { SeguroIndividualPlanoFormComponent } from './seguro-individual-plano/seguro-individual-plano-form/seguro-individual-plano-form.component';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'inscrever-se',
    component: InscreverSeComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'upload-arquivo',
    component: UploadArquivoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'seguro-individual-plano-form',
    component: SeguroIndividualPlanoFormComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
