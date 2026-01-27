import { IsNotEmpty, IsString, IsUrl, IsNumber } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsString()
  tecnologias: string;

  @IsNotEmpty()
  @IsUrl()
  linkGithub: string;

  @IsNotEmpty()
  @IsUrl()
  demo: string;

  @IsNotEmpty()
  @IsUrl()
  imagem: string;

  @IsNotEmpty()
  @IsNumber()
  ordem: number;
}
