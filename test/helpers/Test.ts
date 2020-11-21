import * as babelCore from '@babel/core';
import * as chalk from 'chalk';
import * as diff from 'diff';

export default class Test {
  constructor(
    protected testName: string,
    protected testCode: string,
    protected expected: string,
    protected babelConfig: babel.TransformOptions,
    protected debug: boolean = false
  ) {
    if (!testName || testName.length === 0) {
      throw new Error('Test name cannot be empty.');
    }

    if (!testCode || testCode.length === 0) {
      throw new Error('Code to test cannot be empty.');
    }

    if (!expected || expected.length === 0) {
      throw new Error('Expected result cannot be empty.');
    }

    if (!babelConfig) {
      throw new Error('Babel configuration is required to transpile th test');
    }
  }

  public run() {
    babelCore.transform(this.testCode, this.babelConfig, (err, result) => {
      if (!err) {
        const changes = diff.diffLines(result?.code || '', this.expected);

        if (this.debug) {
          console.log('\n\nDebug mode enabled');
          console.log(result?.code);
          console.log('\n\n');
        }

        if (changes.length > 1) {
          console.log(
            `Test: ${this.testName} | result: ${chalk.red('mismatch')}`
          );
          this.printChanges(changes);
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

  protected printChanges(changes: diff.Change[]) {
    changes.forEach((c) => {
      if (c.added) {
        console.log(this.formatDiffByLine(c.value, '+'));
      } else if (c.removed) {
        console.log(this.formatDiffByLine(c.value, '-'));
      }
    });
  }

  protected formatDiffByLine(diffString: string, marker: '+' | '-'): string {
    const color = marker === '+' ? 'green' : 'red';
    const bgColor = marker === '+' ? 'bgGreen' : 'bgRed';
    const diffParts = diffString.split('\n');

    return diffParts
      .slice(0, diffParts.length - 1)
      .map((line) =>
        chalk[color](
          `${marker} ${/^\s*$/.test(line) ? chalk[bgColor](line) : line}`
        )
      )
      .join('\n');
  }
}
