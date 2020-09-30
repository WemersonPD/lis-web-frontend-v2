import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './seguro-individual-plano-form.component.html',
})
export class SeguroIndividualPlanoFormComponent implements OnInit {
  public seguroIndividualPlanoForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.seguroIndividualPlanoForm = this.formBuilder.group({
      Produto: ['', [Validators.required]],
      Plano: ['', [Validators.required]],
      Capital: [''],
      Corretor: ['', [Validators.required]],
      DataInicioVigencia: ['', [Validators.required]],
      DataFimVigencia: [''],
      FrequenciaEmissao: ['', [Validators.required]],
      TipoVencimento: [''],
      DiaVencimento: [''],
      DiasUteisVencimento: [''],
      Segurado: this.formBuilder.group({
        Codigo: ['', []],
        QRCode: ['', []],
        DVCode: ['', []],
        Cpf: [
          '',
          [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
          ],
        ],
        Nome: ['', [Validators.required, Validators.maxLength(50)]],
        DataNacimento: ['', [Validators.required]],
        Capital: ['', [Validators.required]],
        Profissao: ['', []],
        FaixaSalarial: ['', []],
        Genero: ['', [Validators.required]],
        FonteRenda: ['', []],
        EstadoCivil: ['', [Validators.required]],
        NomeConjuge: [''],
        DataNascimentoConjuge: [''],
        Endereco: this.formBuilder.group({
          Endereco: ['', [Validators.required, Validators.maxLength(50)]],
          Numero: ['', [Validators.required, Validators.maxLength(50)]],
          Complemento: ['', [Validators.maxLength(30)]],
          Bairro: ['', [Validators.required, Validators.maxLength(25)]],
          Cidade: ['', [Validators.required, Validators.maxLength(25)]],
          UF: ['', [Validators.required, Validators.maxLength(2)]],
          CEP: ['', [Validators.required, Validators.maxLength(8)]],
        }),
        Email: ['', []],
        TelefoneResidencial: ['', []],
        TelefoneComercial: ['', []],
        TelefoneCelular: ['', []],
        Beneficiarios: this.formBuilder.array([]),
        Agregados: this.formBuilder.group({
          Cpf: [
            '',
            [Validators.required, Validators.min(11), Validators.max(11)],
          ],
          Nome: ['', [Validators.required, Validators.maxLength(50)]],
          DataNascimento: ['', [Validators.required]],
          AgregadoTipo: ['', []],
        }),
      }),
      AtividadePrincipal: ['', []],
      FormaPagamento: ['', [Validators.required]],
      Consignado: ['', []],
      Debito: ['', []],
      DPS: ['', []],
      Origem: ['', []],
    });
  }

  contratar() {
    const form = this.seguroIndividualPlanoForm.getRawValue();
    console.log(form);
  }

  addBeneficiario(): void {
    const segurado = this.Segurado;
    const beneficiario = segurado.controls.Beneficiarios as FormArray;
    beneficiario.push(
      this.formBuilder.group({
        Nome: ['', [Validators.required, Validators.maxLength(50)]],
        Parentesco: ['', [Validators.required]],
        Percentual: ['', [Validators.required]],
      })
    );
  }
  removerBeneficiario() {
    const segurado = this.Segurado;
    const beneficiario = segurado.controls.Beneficiarios as FormArray;
    beneficiario.removeAt(beneficiario.length - 1);
  }

  get Segurado(): FormGroup {
    return this.seguroIndividualPlanoForm.controls.Segurado as FormGroup;
  }

  get Beneficiarios() {
    const segurado = this.Segurado;
    return segurado.controls.Beneficiarios as FormArray;
  }
  log(i) {
    console.log(i);
  }
}
