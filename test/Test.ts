import * as babelCore from '@babel/core';
import * as chalk from 'chalk';
import * as diff from 'diff';

import { printChanges } from './utils';

export default class Test {
  constructor(
    protected testName: string,
    protected testCode: string,
    protected expected: string,
    protected babelConfig: babel.TransformOptions
  ) {}

  public run() {
    babelCore.transform(this.testCode, this.babelConfig, (err, result) => {
      if (!err) {
        const changes = diff.diffLines(result?.code || '', this.expected);

        if (changes.length > 1) {
          console.log(
            `Test: ${this.testName} | result: ${chalk.red('mismatch')}`
          );
          printChanges(changes);
        } else {
          console.log(
            `Test: ${this.testName} | result: ${chalk.green('match')}`
          );
        }
      } else {
        console.log('There was an error compiling the test code.');
        console.error(err);
      }
    });
  }
}
