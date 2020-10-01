import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { SeguroIndividualPlanoService } from '../seguro-individual-plano.service';

@Component({
  templateUrl: './seguro-individual-plano-form.component.html',
})
export class SeguroIndividualPlanoFormComponent implements OnInit {
  public seguroIndividualPlanoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private seguroIndividualPlanoService: SeguroIndividualPlanoService
  ) {}

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
        Agregados: this.formBuilder.array([]),
      }),
      AtividadePrincipal: ['', []],
      FormaPagamento: [0, [Validators.required]],
      Consignado: this.formBuilder.group({
        Funcional: ['', []],
        Matricula: ['', [Validators.required]],
      }),
      Debito: this.formBuilder.group({
        Banco: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(3),
          ],
        ],
        Agencia: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(4),
          ],
        ],
        DigitoVerificadorAgencia: ['', []],
        Conta: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(4),
          ],
        ],
        DigitoVerificadorConta: [
          '',
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(2),
          ],
        ],
      }),
      DPS: this.formBuilder.array([]),
      Origem: ['', []],
    });
  }

  contratar() {
    const form = this.seguroIndividualPlanoForm.getRawValue();
    this.seguroIndividualPlanoService.contratar(form).subscribe(
      (resp) => {
        Swal.fire('Contratado com sucesso', '', 'success');
        console.log(resp);
      },
      (err) => {
        Swal.fire('Erro ao contratar', err, 'error');
      }
    );
    console.log(form);
  }

  addBeneficiario(): void {
    const beneficiarios = this.Beneficiarios;
    const beneficiario = this.formBuilder.group({
      Nome: ['', [Validators.required, Validators.maxLength(50)]],
      Parentesco: ['', [Validators.required]],
      Percentual: ['', [Validators.required]],
    });
    beneficiarios.push(beneficiario);
  }

  removerBeneficiario() {
    const beneficiario = this.Beneficiarios;
    beneficiario.removeAt(beneficiario.length - 1);
  }

  get Segurado(): FormGroup {
    return this.seguroIndividualPlanoForm.controls.Segurado as FormGroup;
  }

  get Beneficiarios(): FormArray {
    const segurado = this.Segurado;
    return segurado.controls.Beneficiarios as FormArray;
  }

  log(i) {
    console.log(i);
  }

  get Agregados(): FormArray {
    const segurado = this.Segurado;
    return segurado.controls.Agregados as FormArray;
  }

  addAgregado(): void {
    const agregados = this.Agregados;
    const agregado = this.formBuilder.group({
      Cpf: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      Nome: ['', [Validators.required, Validators.maxLength(50)]],
      DataNascimento: ['', [Validators.required]],
      AgregadoTipo: ['', []],
    });

    agregados.push(agregado);
  }

  removerAgregado(): void {
    const agregados = this.Agregados;
    agregados.removeAt(agregados.length - 1);
  }

  get DPS(): FormArray {
    return this.seguroIndividualPlanoForm.controls.DPS as FormArray;
  }

  addDPS(): void {
    const dps = this.DPS;
    const group = this.formBuilder.group({
      Codigo: [''],
      Resposta: [''],
      Texto: [''],
    });
    dps.push(group);
  }

  removerDPS(): void {
    const dps = this.DPS;
    dps.removeAt(this.DPS.length - 1);
  }
}
