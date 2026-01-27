import { IsInt, IsOptional, IsString, IsUrl, Min } from 'class-validator';

export class UpdateProjectDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsString()
  tecnologias?: string;

  @IsOptional()
  @IsUrl()
  linkGithub?: string;

  @IsOptional()
  @IsUrl()
  demo?: string;

  @IsOptional()
  @IsUrl()
  imagem?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  ordem?: number;
}
