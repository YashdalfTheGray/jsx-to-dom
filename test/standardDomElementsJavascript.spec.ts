import Test from './Test';

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

export default new Test(testCode, expected, javascriptConfig);
