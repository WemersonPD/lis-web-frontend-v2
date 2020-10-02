import { TokenService } from './../token/token.service';
import { Observable } from 'rxjs';
import { UsuarioService } from './../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  public usuario: Usuario;
  constructor(
    private usuarioService: UsuarioService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.hasToken()) {
      this.usuarioService.pegarUsuario().subscribe(
        (usuario) => (this.usuario = usuario),
        (err) => console.log(err)
      );
    }
  }
}
