#!/usr/bin/env node

/**
 * random-string
 * ver. 1.0.0
 */

const commander = require('commander');
const program = new commander.Command();
const VERSION = require('./package.json').version;
const crypto = require('crypto');

function main() {
  program.version(VERSION).parse(process.argv);

  let n = 10;
  if (program.args.length > 0) {
    let tmp = parseInt(program.args[0]);
    if (!isNaN(tmp)) {
      n = tmp;
    }
  }
  console.log(
    crypto.randomBytes(n).toString('base64').substring(0, n)
  );
}

if (require.main === module) {
  main();
}