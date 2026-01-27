import { ProjectsService } from '../../../../../src/modules/projects/application/services/projects.service';
import type { IProjectRepository } from '../../../../../src/modules/projects/domain/repositories/project.repository.interface';

describe('ProjectsService', () => {
  const repoMock: jest.Mocked<IProjectRepository> = {
    create: jest.fn(),
    findById: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  const service = new ProjectsService(repoMock);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('create deve chamar repo.create com entity mapeada', async () => {
    repoMock.create.mockResolvedValue({} as any);

    const dto = {
      titulo: 'Projeto X',
      descricao: 'Uma descrição minimamente decente.',
      tecnologias: 'Node, NestJS, TypeScript',
      linkGithub: 'https://github.com/marcos-rabinowicz/repo',
      demo: 'https://example.com/demo',
      imagem: 'https://example.com/img.png',
      ordem: 0,
    } as any;

    await service.create(dto);

    expect(repoMock.create).toHaveBeenCalledTimes(1);
  });
});
