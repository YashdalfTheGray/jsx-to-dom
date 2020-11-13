import * as babelCore from '@babel/core';

import babelPresets from './babelPresets';

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

babelCore.transform(testCode, babelPresets, (err, result) => {
  if (!err) {
    console.log(result);
  } else {
    console.error(err);
  }
});
