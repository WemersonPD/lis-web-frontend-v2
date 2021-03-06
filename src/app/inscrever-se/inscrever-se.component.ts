import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { UsuarioService } from '../core/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './inscrever-se.component.html',
  styleUrls: ['./inscrever-se.component.css'],
})
export class InscreverSeComponent implements OnInit {
  public inscreverSeForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inscreverSeForm = this.formBuilder.group({
      cpf: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      dataNacimento: ['', [Validators.required]],
      rg: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  public increverSe(): void {
    const usuario = this.inscreverSeForm.getRawValue();
    this.usuarioService.criarUsuario(usuario).subscribe(
      () => {
        Swal.fire('Usuário cadastrado com sucesso', '', 'success');
        this.router.navigate(['']);
      },
      (erro) => {
        Swal.fire('Erro ao cadastrar o usuário', '', 'error');
      }
    );
  }
}
