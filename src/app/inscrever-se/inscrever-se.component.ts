import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './inscrever-se.component.html',
  styleUrls: ['./inscrever-se.component.css']
})
export class InscreverSeComponent implements OnInit {
  public inscreverSeForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.inscreverSeForm = this.formBuilder.group({
      cpf: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      dataNacimento: ['', [Validators.required]],
      rg: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      tipo: ['', [Validators.required]],
    });
  }
  public increverSe(): void {
    console.log(this.inscreverSeForm.getRawValue());
  }
}
