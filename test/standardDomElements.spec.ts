import * as babelCore from '@babel/core';
import * as chalk from 'chalk';

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
    const matches = result?.code === expected;
    console.log(
      `Test: standard DOM components | result: ${
        matches ? chalk.green('match') : chalk.red('mismatch')
      }`
    );

    if (!matches) {
      process.exit(1);
    }
  } else {
    console.log('There was an error compiling the test code.');
    console.error(err);
  }
});
