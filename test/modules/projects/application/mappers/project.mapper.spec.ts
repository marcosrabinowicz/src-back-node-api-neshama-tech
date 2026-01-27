import { UpdateProjectDto } from '../../../../../src/modules/projects/application/dto/update-project.dto';
import { ProjectMapper } from '../../../../../src/modules/projects/application/mappers/project.mapper';

describe('ProjectMapper.toUpdatePayload', () => {
  it('deve mapear apenas campos definidos e normalizar strings', () => {
    const dto: UpdateProjectDto = {
      titulo: '  Novo título  ',
      descricao: undefined,
      tecnologias: '  Node, NestJS  ',
      ordem: 2,
    };

    const payload = ProjectMapper.toUpdatePayload(dto);

    expect(payload).toEqual({
      titulo: 'Novo título',
      tecnologias: 'Node, NestJS',
      ordem: 2,
    });
  });

  it('deve retornar objeto vazio quando nenhum campo é informado', () => {
    const dto: UpdateProjectDto = {};

    const payload = ProjectMapper.toUpdatePayload(dto);

    expect(payload).toEqual({});
  });

  it('não deve incluir campos undefined no payload', () => {
    const dto: UpdateProjectDto = {
      titulo: undefined,
      descricao: undefined,
    };

    const payload = ProjectMapper.toUpdatePayload(dto);

    expect(Object.keys(payload).length).toBe(0);
  });
});
