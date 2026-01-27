import { Project } from '../../domain/entities/project.entity';
import { CreateProjectDto } from '../dto/create-project.dto';

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
}
