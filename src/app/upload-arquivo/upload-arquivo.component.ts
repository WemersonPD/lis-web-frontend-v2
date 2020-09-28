import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-arquivo',
  templateUrl: './upload-arquivo.component.html',
  styleUrls: ['./upload-arquivo.component.css'],
})
export class UploadArquivoComponent implements OnInit {
  public uploadArquivoForm: FormGroup;
  public arquivo: File;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.uploadArquivoForm = this.formBuilder.group({
      arquivo: ['', [Validators.required]],
    });
  }

  upload() {
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(this.arquivo);
    console.log(fileReader.result);
  }
}
