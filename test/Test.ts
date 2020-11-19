import * as babelCore from '@babel/core';
import * as chalk from 'chalk';
import * as diff from 'diff';

import { typescriptConfig } from './babelPresets';
import { printChanges } from './utils';

export default class Test {
  constructor(protected testCode: string, protected expected: string) {}

  public run() {
    babelCore.transform(this.testCode, typescriptConfig, (err, result) => {
      if (!err) {
        const changes = diff.diffLines(result?.code || '', this.expected);

        if (changes.length > 1) {
          console.log(
            `Test: standard DOM elements | result: ${chalk.red('mismatch')}`
          );
          printChanges(changes);
        } else {
          console.log(
            `Test: standard DOM elements | result: ${chalk.green('match')}`
          );
        }
      } else {
        console.log('There was an error compiling the test code.');
        console.error(err);
      }
    });
  }
}
