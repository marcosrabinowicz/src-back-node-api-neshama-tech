import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../../../src/app.module';
import { DomainExceptionFilter } from '../../../../src/shared/filters/domain-exception.filter';

describe('ProjectsController (Domain Error)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    // 👇 ESSENCIAL
    app.useGlobalFilters(new DomainExceptionFilter());

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('deve retornar 422 quando regra de domínio falhar', async () => {
    await request(app.getHttpServer())
      .post('/projects')
      .send({
        titulo: 'a',
        descricao: 'curta',
        tecnologias: 'Node',
        linkGithub: 'https://github.com/x',
        demo: 'https://example.com',
        imagem: 'https://example.com/img.png',
        ordem: 0,
      })
      .expect(422)
      .expect((res) => {
        expect(res.body).toHaveProperty('error', 'DomainValidationError');
        expect(res.body).toHaveProperty('message');
      });
  });
});
