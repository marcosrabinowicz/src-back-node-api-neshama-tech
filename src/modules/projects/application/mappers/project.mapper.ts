import { Project } from '../../domain/entities/project.entity';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';

export class ProjectMapper {
  static fromCreateDto(dto: CreateProjectDto): Project {
    const p = new Project();

    p.titulo = dto.titulo.trim();
    p.descricao = dto.descricao.trim();
    p.tecnologias = dto.tecnologias.trim();
    p.linkGithub = dto.linkGithub.trim();
    p.demo = dto.demo.trim();
    p.imagem = dto.imagem.trim();
    p.ordem = dto.ordem;

    return p;
  }

  static toUpdatePayload(dto: UpdateProjectDto): Partial<Project> {
    const payload: Partial<Project> = {};

    if (dto.titulo !== undefined) {
      payload.titulo = dto.titulo.trim();
    }

    if (dto.descricao !== undefined) {
      payload.descricao = dto.descricao.trim();
    }

    if (dto.tecnologias !== undefined) {
      payload.tecnologias = dto.tecnologias.trim();
    }

    if (dto.linkGithub !== undefined) {
      payload.linkGithub = dto.linkGithub.trim();
    }

    if (dto.demo !== undefined) {
      payload.demo = dto.demo.trim();
    }

    if (dto.imagem !== undefined) {
      payload.imagem = dto.imagem.trim();
    }

    if (dto.ordem !== undefined) {
      payload.ordem = dto.ordem;
    }

    return payload;
  }
}
