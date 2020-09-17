import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { AuthService } from './../core/auth/auth.service';
import { TokenService } from './../core/token/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login(): void {
    const { email, senha } = this.loginForm.getRawValue();
    this.authService.autenticar(email, senha)
      .subscribe(
        (token) => {
          // tslint:disable-next-line: no-string-literal
          this.tokenService.setToken(token['access_token']);
          Swal.fire('Bem vindo', '', 'success');
        },
        () => {
          Swal.fire('Ops', 'Erro ao logar', 'error');
        }
      );

  }

}
