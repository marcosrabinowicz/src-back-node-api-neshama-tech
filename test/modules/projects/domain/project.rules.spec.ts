import { DomainException } from '../../../../src/modules/projects/domain/exceptions/domain.exception';
import { ProjectRules } from '../../../../src/modules/projects/domain/rules/project.rules';

describe('ProjectRules', () => {
  const validCreate = {
    titulo: 'Projeto X',
    descricao: 'Uma descrição minimamente decente.',
    tecnologias: 'Node, NestJS, TypeScript',
    linkGithub: 'https://github.com/marcos-rabinowicz/repo',
    demo: 'https://example.com/demo',
    imagem: 'https://example.com/img.png',
    ordem: 0,
  } as any;

  it('valida create com payload válido', () => {
    expect(() => ProjectRules.validateCreate(validCreate)).not.toThrow();
  });

  it('falha se titulo for curto', () => {
    expect(() =>
      ProjectRules.validateCreate({ ...validCreate, titulo: 'a' })
    ).toThrow(DomainException);
  });

  it('falha se linkGithub não for URL', () => {
    expect(() =>
      ProjectRules.validateCreate({
        ...validCreate,
        linkGithub: 'github.com/x',
      })
    ).toThrow(DomainException);
  });

  it('update valida apenas campos enviados', () => {
    expect(() =>
      ProjectRules.validateUpdate({ titulo: 'Novo título' } as any)
    ).not.toThrow();
    expect(() => ProjectRules.validateUpdate({ titulo: 'a' } as any)).toThrow(
      DomainException
    );
  });
});
