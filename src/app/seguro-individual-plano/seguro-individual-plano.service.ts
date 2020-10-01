import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { RequisicaoSeguroIndividualPlano } from './requisicao-seguro-individual-plano';

@Injectable({
  providedIn: 'root',
})
export class SeguroIndividualPlanoService {
  private apiUrl = environment.apiUrl + '/SeguroIndividualPlano';

  constructor(private httpClient: HttpClient) {}

  contratar(RequisicaoSeguroIndividual: RequisicaoSeguroIndividualPlano) {
    return this.httpClient.post(this.apiUrl, RequisicaoSeguroIndividual);
  }
}
