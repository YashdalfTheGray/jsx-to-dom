import * as babelCore from '@babel/core';
import * as chalk from 'chalk';
import * as diff from 'diff';

import { javascriptConfig } from './babelPresets';

const testCode = `
import createElement from '../src/index';

class StandardDomComponent {
  render() {
    return (
      <div
        style="display: flex;"
        onClick={() => console.log('element was clicked')}>
        <h1>This is a test</h1>
      </div>
    )
  }
}
`;

const expected = `import createElement from '../src/index';

class StandardDomComponent {
  render() {
    return createElement("div", {
      style: "display: flex;",
      onClick: () => console.log('element was clicked')
    }, createElement("h1", null, "This is a test"));
  }

}`;

babelCore.transform(testCode, javascriptConfig, (err, result) => {
  if (!err) {
    const changes = diff.diffLines(expected, result?.code || '');

    if (changes.length !== 0) {
      console.log(
        `Test: standard DOM elements | result: ${chalk.red('mismatch')}`
      );
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
