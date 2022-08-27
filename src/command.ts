import { buildSync } from 'esbuild';

export const run = (path: string, output: string) => {
  buildSync({
    entryPoints: [path],
    bundle: true,
    write: true,
    platform: 'node',
    target: ['node14'],
    outfile: output,
    minify: true,
    banner: { js: '#!/usr/bin/env node' },
  });
}