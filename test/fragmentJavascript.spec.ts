import { Test, babelConfigForJs } from './helpers';

const testCode = `
import createElement, { createFragment } from '../src/index';

const MyFragmentComponent = ({ name }) => (
  <>
    <div>Text 1</div>
    <div>Text 2</div>
  </>
)

export default MyFragmentComponent;
`;

const expected = `import createElement, { createFragment } from '../src/index';

const MyFragmentComponent = ({
  name
}) => createElement(createFragment, null, createElement("div", null, "Text 1"), createElement("div", null, "Text 2"));

export default MyFragmentComponent;`;

export default new Test(
  'Component with fragments (JS)',
  testCode,
  expected,
  babelConfigForJs
);
