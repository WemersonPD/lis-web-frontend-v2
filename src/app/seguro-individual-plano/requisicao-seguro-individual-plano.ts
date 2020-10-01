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
  Endereco: string;
  Numero: string;
  Complemento?: string;
  Bairro: string;
  Cidade: string;
  UF: string;
  CEP: string;
}

class _BenificiariosDto {
  Nome: string;
  Parentesco: number;
  Percentual: number;
}

class _Agregados {
  Cpf: string;
  Nome: string;
  DataNascimento: Date;
  AgregadoTipo: number;
}

class _SeguradoDto {
  Codigo?: number;
  QRCode?: number;
  DVCode?: number;
  Cpf: string;
  Nome: string;
  DataNacimento: Date;
  Capital: number;
  Profissao?: number;
  FaixaSalarial?: number;
  Genero: number;
  FonteRenda?: number;
  EstadoCivil: number;
  NomeConjuge?: string;
  DataNascimentoConjuge?: Date;
  Endereco: _EnderecoDTO;
  Email?: string;
  TelefoneResidencial?: string;
  TelefoneComercial?: string;
  TelefoneCelular?: string;
  Beneficiarios?: _BenificiariosDto[];
  Agregados?: _Agregados[];
}

class _Consignado {
  Funcional?: number;
  Matricula: string;
}

class _Debito {
  Banco: string;
  Agencia: string;
  DigitoVerificadorAgencia?: string;
  Conta: string;
  DigitoVerificadorConta: string;
}

class _DPS {
  Codigo: number;
  Resposta: string;
  Texto: string;
}

export class RequisicaoSeguroIndividualPlano {
  Produto: number;
  Plano: number;
  Capital?: number;
  Corretor: number;
  DataInicioVigencia: Date;
  DataFimVigencia?: Date;
  FrequenciaEmissao: number;
  TipoVencimento?: number;
  DiaVencimento?: number;
  DiasUteisVencimento?: number;
  Segurado: _SeguradoDto;
  AtividadePrincipal?: number;
  FormaPagamento: number;
  Consignado?: _Consignado;
  Debito?: _Debito;
  DPS?: _DPS[];
  Origem?: number;
}
