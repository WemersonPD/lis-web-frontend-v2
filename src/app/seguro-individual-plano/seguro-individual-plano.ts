import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  Length,
  MaxLength,
  ValidateNested,
} from 'class-validator';

class _EnderecoDTO {
  @IsNotEmpty({
    message: ' Informe o endereço do segurado',
  })
  @MaxLength(50, {
    message: ' O endereço do segurado não pode conter mais de 50 caracteres',
  })
  Endereco: string;

  @IsNotEmpty({
    message: ' Informe o número do endereço do segurado',
  })
  @MaxLength(50, {
    message:
      ' O número de endereço do segurado não pode conter mais de 50 caracteres',
  })
  Numero: string;

  @IsOptional()
  @MaxLength(30, {
    message:
      ' O complemento de endereço do segurado não pode conter mais de 30 caracteres',
  })
  Complemento?: string;

  @IsNotEmpty({
    message: ' Informe o bairro do segurado',
  })
  @MaxLength(25, {
    message: ' O bairro do segurado não pode conter mais de 25 caracteres',
  })
  Bairro: string;

  @IsNotEmpty({
    message: ' Informe a cidade do segurado',
  })
  @MaxLength(25, {
    message: ' A cidade do segurado não pode conter mais de 25 caracteres',
  })
  Cidade: string;

  @IsNotEmpty({
    message: ' Informe o UF do segurado',
  })
  @MaxLength(2, {
    message: ' O UF do segurado não pode conter mais de 2 caracteres',
  })
  UF: string;

  @IsNotEmpty({
    message: ' Informe o CEP do segurado',
  })
  @MaxLength(8, {
    message: ' O CEP do segurado não pode conter mais de 8 caracteres',
  })
  CEP: string;
}

class _BenificiariosDto {
  @IsNotEmpty({
    message: ' Informe o nome do benificiário',
  })
  @MaxLength(50, {
    message: ' O nome do benificiário não pode conter mais de 50 caracteres',
  })
  Nome: string;

  @IsNotEmpty({
    message: ' Informe o parentesco do benificiário',
  })
  Parentesco: number;

  @IsNotEmpty({
    message: ' Informe o percentual do benificiário',
  })
  Percentual: number;
}

class _Agregados {
  @IsNotEmpty({
    message: ' Informe o cpf do agregado',
  })
  @Length(11, 11, {
    message: ' O cpf do agregado deve conter 11 caracteres',
  })
  Cpf: string;

  @IsNotEmpty({
    message: ' Informe o nome do agregado',
  })
  @MaxLength(50, {
    message: ' O nome do agregado não pode conter mais de 50 caracteres',
  })
  Nome: string;

  @IsNotEmpty({
    message: 'Informe a data de nascimento do agregado',
  })
  DataNascimento: Date;

  @IsOptional()
  AgregadoTipo: number;
}

class _SeguradoDto {
  @IsOptional()
  Codigo?: number;

  @IsOptional()
  QRCode?: number;

  @IsOptional()
  DVCode?: number;

  @IsNotEmpty({
    message: ' Informe o cpf do segurado',
  })
  @Length(11, 11, {
    message: ' O cpf do segurado deve conter 11 caracteres',
  })
  Cpf: string;

  @IsNotEmpty({
    message: ' Informe o nome do segurado',
  })
  @MaxLength(50, {
    message: ' O nome do segurado não pode conter mais de 50 caracteres',
  })
  Nome: string;

  @IsNotEmpty({
    message: ' Informe a data de nacimento do segurado',
  })
  DataNacimento: Date;

  @IsNotEmpty({
    message: ' Informe o capital do segurado',
  })
  Capital: number;

  @IsOptional()
  Profissao?: number;

  @IsOptional()
  FaixaSalarial?: number;

  @IsNotEmpty({
    message: ' Informe o genero do segurado',
  })
  Genero: number;

  @IsOptional()
  FonteRenda?: number;

  @IsNotEmpty({
    message: ' Informe o estado civil do segurado',
  })
  EstadoCivil: number;

  @IsOptional()
  NomeConjuge?: string;

  @IsOptional()
  DataNascimentoConjuge?: Date;

  @IsNotEmpty({
    message: ' Informe os dados do endereço do segurado',
  })
  @ValidateNested()
  @Type()
  Endereco: _EnderecoDTO;

  @IsOptional()
  Email?: string;

  @IsOptional()
  TelefoneResidencial?: string;

  @IsOptional()
  TelefoneComercial?: string;

  @IsOptional()
  TelefoneCelular?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => _BenificiariosDto)
  Beneficiarios?: _BenificiariosDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => _Agregados)
  Agregados?: _Agregados[];
}

class _Consignado {
  @IsOptional()
  Funcional?: number;

  @IsNotEmpty({
    message: ' Informe a matrícula/benefício do consignado',
  })
  Matricula: string;
}

class _Debito {
  @IsNotEmpty({
    message: ' Informe o número do banco de débito',
  })
  @Length(3, 3, {
    message: ' O número do banco de débito deve conter 3 caracteres',
  })
  Banco: string;

  @IsNotEmpty({
    message: ' Informe o código da agência de débito',
  })
  @Length(4, 4, {
    message: ' O código da agência de débito deve conter 4 caracteres',
  })
  Agencia: string;

  @IsOptional()
  DigitoVerificadorAgencia?: string;

  @IsNotEmpty({
    message: ' Informe o número da conta de débito',
  })
  @Length(4, 4, {
    message: ' O número da conta de débito deve conter 4 caracteres',
  })
  Conta: string;

  @IsNotEmpty({
    message: ' Informe o digito verificador da conta de débito',
  })
  @Length(1, 2, {
    message:
      ' O digito verificador da conta de débito deve conter 1 ou 2 caracteres',
  })
  DigitoVerificadorConta: string;
}

class _DPS {
  @IsOptional()
  Codigo: number;

  @IsOptional()
  Resposta: string;

  @IsOptional()
  Texto: string;
}

export class RequisicaoSeguroIndividualPlanoDto {
  @IsNotEmpty({
    message: 'Informe o código do produto',
  })
  Produto: number;

  @IsNotEmpty({
    message: 'Informe o código do plano',
  })
  Plano: number;

  @IsOptional()
  Capital?: number;

  @IsNotEmpty({
    message: 'Informe o código do corretor',
  })
  Corretor: number;

  @IsNotEmpty({
    message: 'Informe a data de início da vigência',
  })
  DataInicioVigencia: Date;

  @IsOptional()
  DataFimVigencia?: Date;

  @IsNotEmpty({
    message: 'Informe a frequência de emissão',
  })
  FrequenciaEmissao: number;

  @IsOptional()
  TipoVencimento?: number;

  @IsOptional()
  DiaVencimento?: number;

  @IsOptional()
  DiasUteisVencimento?: number;

  @IsNotEmpty({
    message: 'Informe os dados do segurado',
  })
  @ValidateNested()
  @Type(() => _SeguradoDto)
  Segurado: _SeguradoDto;

  @IsOptional()
  AtividadePrincipal?: number;

  @IsNotEmpty({
    message: 'Informe a forma de pagamento',
  })
  FormaPagamento: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => _Consignado)
  Consignado?: _Consignado;

  @IsOptional()
  @ValidateNested()
  @Type(() => _Debito)
  Debito?: _Debito;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => _DPS)
  DPS?: _DPS[];

  @IsOptional()
  Origem?: number;
}
