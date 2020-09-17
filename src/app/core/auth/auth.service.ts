import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Token } from '../token/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiAuth = environment.apiUrl + '/token';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public autenticar(email: string, senha: string): Observable<Token> {
    return this.httpClient.post<Token>(this.apiAuth, { email, senha });
  }

}
