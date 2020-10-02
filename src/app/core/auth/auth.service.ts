import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Token } from '../token/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiAuth = environment.apiAuth;

  constructor(private httpClient: HttpClient) {}

  public autenticar(cpf: string, senha: string): Observable<Token> {
    const body = `username=${cpf}&password=${senha}&grant_type=password`;
    return this.httpClient.post<Token>(this.apiAuth, body);
  }
}
