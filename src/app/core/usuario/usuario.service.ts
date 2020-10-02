import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import { TokenService } from './../token/token.service';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = environment.apiUrl + '/Usuario';

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}
  public pegarUsuario(): Observable<Usuario> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.httpClient.get<Usuario>(`${this.apiUrl}?token=${token}`, {
      headers,
    });
  }

  public criarUsuario(usuario: Usuario) {
    return this.httpClient.post(this.apiUrl, usuario);
  }

  public sair() {
    this.tokenService.removeToken();
  }
}
