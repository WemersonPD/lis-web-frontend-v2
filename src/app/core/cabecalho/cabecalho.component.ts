import { TokenService } from './../token/token.service';
import { UsuarioService } from './../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  public usuario: Usuario;
  constructor(
    private usuarioService: UsuarioService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.hasToken()) {
      this.usuarioService.pegarUsuario().subscribe(
        (usuario) => (this.usuario = usuario),
        (err) => console.log(err)
      );
    }
  }

  sair() {
    this.usuarioService.sair();
    this.router.navigate(['']);
  }
}
