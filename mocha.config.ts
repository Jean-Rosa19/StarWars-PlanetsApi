import path from 'path';

export default {
  extension: ['ts'],
  spec: 'tests/**/*.test.ts',
  require: 'ts-node/register',
  file: path.resolve(__dirname, 'tests', 'setup.ts'),
};
