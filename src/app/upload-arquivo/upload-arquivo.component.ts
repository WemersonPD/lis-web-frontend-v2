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
      this.segurosIndividuais = jsonData['Planilha1'];
    };
    reader.readAsBinaryString(file);
  }
}
