import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';

import { RequisicaoSeguroIndividualPlano } from '../seguro-individual-plano/requisicao-seguro-individual-plano';
import { SeguroIndividualPlanoService } from '../seguro-individual-plano/seguro-individual-plano.service';

@Component({
  selector: 'app-upload-arquivo',
  templateUrl: './upload-arquivo.component.html',
  styleUrls: ['./upload-arquivo.component.css'],
})
export class UploadArquivoComponent implements OnInit {
  public uploadArquivoForm: FormGroup;
  public arquivo: File;
  public segurosIndividuais: RequisicaoSeguroIndividualPlano[];
  constructor(
    private formBuilder: FormBuilder,
    private seguroIndividualService: SeguroIndividualPlanoService
  ) {}

  ngOnInit(): void {
    this.uploadArquivoForm = this.formBuilder.group({
      arquivo: ['', [Validators.required]],
    });
  }

  upload(): void {
    for (const seguroIndividual of this.segurosIndividuais) {
      console.log(seguroIndividual);
      this.seguroIndividualService.contratar(seguroIndividual).subscribe(
        (resp) => console.log(resp),
        (err) => console.log(err)
      );
    }
  }

  onFileChange(ev): void {
    let workBook = null;
    let jsonData: RequisicaoSeguroIndividualPlano[];
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});

      const dataString = JSON.stringify(jsonData);
      console.log(jsonData);
      const seguroIndividualArray = jsonData['Planilha1'];
      // for (const seguroIndividualAtual of seguroIndividualArray) {
      //   let seguroIndividual: RequisicaoSeguroIndividualPlano = {
      //     Produto: seguroIndividualAtual.Produto,
      //     Plano: seguroIndividualAtual.Plano,
      //     Capital: seguroIndividualAtual.Capital,
      //     Corretor: seguroIndividualAtual.Corretor,
      //     DataInicioVigencia: seguroIndividualAtual.DataInicioVigencia,
      //     DataFimVigencia: seguroIndividualAtual.DataFimVigencia,
      //     FrequenciaEmissao: seguroIndividualAtual.FrequenciaEmissao,
      //     TipoVencimento: seguroIndividualAtual.TipoVencimento,
      //     DiaVencimento: seguroIndividualAtual.DiaVencimento,
      //     DiasUteisVencimento: seguroIndividualAtual.DiasUteisVencimento,
      //     Segurado: {
      //       Codigo: seguroIndividualAtual.CodigoSegurado,
      //       QRCode: seguroIndividualAtual.QRCodeSegurado,
      //       Cpf: seguroIndividualAtual.CpfSegurado,
      //       Nome: seguroIndividualAtual.NomeSegurado,
      //       DataNacimento: seguroIndividualAtual.DataNacimentoSegurado,
      //       Capital: seguroIndividualAtual.CapitalSegurado,
      //       Profissao: seguroIndividualAtual.ProfissaoSegurado,
      //       FaixaSalarial: seguroIndividualAtual.FaixaSalarialSegurado,
      //       Genero: seguroIndividualAtual.GeneroSegurado,
      //       FonteRenda: seguroIndividualAtual.FonteRendaSegurado,
      //       EstadoCivil: seguroIndividualAtual.EstadoCivilSegurado,
      //       NomeConjuge: seguroIndividualAtual.NomeConjugeSegurado,
      //       DataNascimentoConjuge:
      //         seguroIndividualAtual.DataNascimentoConjugeSegurado,
      //       Endereco: {
      //         Endereco: seguroIndividualAtual.EnderecoSegurado,
      //         Numero: seguroIndividualAtual.NumeroSegurado,
      //         Complemento: seguroIndividualAtual.ComplementoSegurado,
      //         Bairro: seguroIndividualAtual.BairroSegurado,
      //         Cidade: seguroIndividualAtual.CidadeSegurado,
      //         UF: seguroIndividualAtual.UFSegurado,
      //         CEP: seguroIndividualAtual.CEPSegurado,
      //       },
      //       Email: seguroIndividualAtual.EmailSegurado,
      //       TelefoneResidencial: seguroIndividualAtual.TelefoneResidencialSegurado,
      //       TelefoneComercial: seguroIndividualAtual.TelefoneComercialSegurado,
      //       TelefoneCelular: seguroIndividualAtual.TelefoneCelularSegurado,
      //       Beneficiarios: {
      //         Nome: seguroIndividualAtual.NomeBeneficiariosSegurado,

      //       },
      //       Agregados: seguroIndividualAtual.AgregadosSegurado,

      //     },
      //   };

      //       Plano: number;
      // Capital?: number;
      // Corretor: number;
      // DataInicioVigencia: Date;
      // DataFimVigencia?: Date;
      // FrequenciaEmissao: number;
      // TipoVencimento?: number;
      // DiaVencimento?: number;
      // DiasUteisVencimento?: number;
      // Segurado: _SeguradoDto;
      // AtividadePrincipal?: number;
      // FormaPagamento: number;
      // Consignado?: _Consignado;
      // Debito?: _Debito;
      // DPS?: _DPS[];
      // Origem?: number;

      //   console.log(seguroIndividual);
      // }
      // this.segurosIndividuais = seguroIndividualArray;
      this.segurosIndividuais = jsonData;
      console.log(this.segurosIndividuais);
    };
    reader.readAsBinaryString(file);
  }
}
