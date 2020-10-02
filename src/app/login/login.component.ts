import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from './../core/auth/auth.service';
import { TokenService } from './../core/token/token.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      cpf: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login(): void {
    const { cpf, senha } = this.loginForm.getRawValue();
    this.authService.autenticar(cpf, senha).subscribe(
      (token) => {
        Swal.fire('Bem vindo', '', 'success');
        this.tokenService.setToken(token['access_token']);
        this.router.navigate(['/', 'seguro-individual-plano-form']);
      },
      (err) => {
        Swal.fire('Ops', 'Verifique seus dados', 'error');
      }
    );
  }
}
