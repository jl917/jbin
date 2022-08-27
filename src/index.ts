import arg from 'arg';
import { run } from './command';
import { resolve } from 'path';

const args = arg({
  '--help': Boolean,
  '--path': String,
  '--output': String,
  '--type': String,
  '-p': '--path',
  '-t': '--type',
  '-o': '--outpup',
});

const type: any = args['--type'] || 'ts';
const path: any = args['--path'] || `./src/index.${type}`;
const output: any = args['--output'] || './dist/index.js';

run(resolve(process.cwd(), path), output);
