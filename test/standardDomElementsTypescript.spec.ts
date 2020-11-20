import { Test, babelConfigForTs } from './helpers';

const testCode = `
import createElement from '../src/index';

class StandardDomComponent {
  public constructor(private componentName: string) {}

  public render() {
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
  constructor(componentName) {
    this.componentName = componentName;
  }

  render() {
    return createElement("div", {
      style: "display: flex;",
      onClick: () => console.log('element was clicked')
    }, createElement("h1", null, "This is a test"));
  }

}`;

export default new Test(
  'Standard DOM elements (TS)',
  testCode,
  expected,
  babelConfigForTs
);
