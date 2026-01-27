import { DomainException } from '../exceptions/domain.exception';
import { CreateProjectDto } from '../../application/dto/create-project.dto';
import { UpdateProjectDto } from '../../application/dto/update-project.dto';

export class ProjectRules {
  static validateCreate(dto: CreateProjectDto) {
    this.validateTitulo(dto.titulo);
    this.validateDescricao(dto.descricao);
    this.validateTecnologias(dto.tecnologias);
    this.validateUrl('linkGithub', dto.linkGithub);
    this.validateUrl('demo', dto.demo);
    this.validateUrl('imagem', dto.imagem);
    this.validateOrdem(dto.ordem);
  }

  static validateUpdate(dto: UpdateProjectDto) {
    if (dto.titulo !== undefined) {
      this.validateTitulo(dto.titulo);
    }

    if (dto.descricao !== undefined) {
      this.validateDescricao(dto.descricao);
    }

    if (dto.tecnologias !== undefined) {
      this.validateTecnologias(dto.tecnologias);
    }

    if (dto.linkGithub !== undefined) {
      this.validateUrl('linkGithub', dto.linkGithub);
    }

    if (dto.demo !== undefined) {
      this.validateUrl('demo', dto.demo);
    }

    if (dto.imagem !== undefined) {
      this.validateUrl('imagem', dto.imagem);
    }

    if (dto.ordem !== undefined) {
      this.validateOrdem(dto.ordem);
    }
  }

  private static validateTitulo(titulo: string) {
    if (!titulo || titulo.trim().length < 3) {
      throw new DomainException('titulo deve ter pelo menos 3 caracteres.');
    }

    if (titulo.trim().length > 120) {
      throw new DomainException('titulo deve ter no máximo 120 caracteres.');
    }
  }

  private static validateDescricao(descricao: string) {
    if (!descricao || descricao.trim().length < 10) {
      throw new DomainException('descricao deve ter pelo menos 10 caracteres.');
    }
  }

  private static validateTecnologias(tecnologias: string) {
    if (!tecnologias || tecnologias.trim().length < 2) {
      throw new DomainException('tecnologias deve ser informado.');
    }
  }

  private static validateUrl(field: string, value: string) {
    if (!value || value.trim().length === 0) {
      throw new DomainException(`${field} deve ser informado.`);
    }

    try {
      const url = new URL(value);
      if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        throw new DomainException(`${field} deve usar http ou https.`);
      }
    } catch {
      throw new DomainException(
        `${field} deve ser uma URL válida (com http/https).`
      );
    }
  }

  private static validateOrdem(ordem: number) {
    if (ordem === null || ordem === undefined || Number.isNaN(ordem)) {
      throw new DomainException('ordem deve ser informada.');
    }

    if (!Number.isInteger(ordem)) {
      throw new DomainException('ordem deve ser um número inteiro.');
    }

    if (ordem < 0) {
      throw new DomainException('ordem não pode ser negativa.');
    }
  }
}
