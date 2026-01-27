import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  roots: ['<rootDir>/src', '<rootDir>/test'],
  testRegex: '.*\\.spec\\.ts$',
  transform: { '^.+\\.(t|j)s$': 'ts-jest' },
  testEnvironment: 'node',

  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['text', 'lcov'],

  collectCoverageFrom: [
    'src/modules/**/domain/**/*.(t|j)s',
    'src/modules/**/application/**/*.(t|j)s',
    '!**/*.spec.ts',
    '!**/*.e2e-spec.ts',
    '!**/infrastructure/**',
    '!**/presentation/**',
    '!**/database/**',
    '!**/main.ts',
    '!**/app.module.ts',
    '!**/index.ts',
  ],

  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },

  passWithNoTests: false,
  verbose: true,
};

export default config;
