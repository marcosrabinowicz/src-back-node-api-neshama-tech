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

  it('falha se url não tiver protocolo', () => {
    expect(() =>
      ProjectRules.validateCreate({
        titulo: 'Projeto X',
        descricao: 'Descrição válida o suficiente',
        tecnologias: 'Node',
        linkGithub: 'github.com/marcos',
        demo: 'https://example.com',
        imagem: 'https://example.com/img.png',
        ordem: 1,
      } as any)
    ).toThrow();
  });

  it('falha se ordem não for inteiro', () => {
    expect(() =>
      ProjectRules.validateCreate({
        titulo: 'Projeto X',
        descricao: 'Descrição válida o suficiente',
        tecnologias: 'Node',
        linkGithub: 'https://github.com/x',
        demo: 'https://example.com',
        imagem: 'https://example.com/img.png',
        ordem: 1.5,
      } as any)
    ).toThrow();
  });

  it('falha se descricao for muito curta', () => {
    expect(() =>
      ProjectRules.validateCreate({
        titulo: 'Projeto X',
        descricao: 'curta',
        tecnologias: 'Node',
        linkGithub: 'https://github.com/x',
        demo: 'https://example.com',
        imagem: 'https://example.com/img.png',
        ordem: 0,
      } as any)
    ).toThrow();
  });
});
