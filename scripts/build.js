const esbuild = require('esbuild');
const package = require('../package.json');
const { execSync } = require('child_process');

const branch = execSync('git branch --show-current').toString().trim();

const outfileMap = {
  master: package.bin.jbin,
  next: package.bin.next_jbin,
}

esbuild.buildSync({
  entryPoints: ['src/index.ts'],
  bundle: true,
  write: true,
  platform: 'node',
  target: ['node14'],
  // external: ['esbuild'],
  outfile: outfileMap[branch] || package.bin.jbin,
  minify: true,
  banner: { js: '#!/usr/bin/env node' },
});