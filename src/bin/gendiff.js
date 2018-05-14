#!/usr/bin/env node
import commander from 'commander';
import { version, description } from '../../package.json';

const program = commander;

program
  .version(`${version}`, '-v, --version')
  .arguments('<firstConfig> <secondConfig>')
  .description(`${description}`)
  .option('-f, --format [type]', 'Output format');

program.parse(process.argv);
