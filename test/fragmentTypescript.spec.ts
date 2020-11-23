import { Test, babelConfigForTs } from './helpers';

const testCode = `
import createElement, { createFragment } from '../src/index';

const MyFunctionalComponent = ({ name }): HTMLElement[] => (
  <>
    <div>Text 1</div>
    <div>Text 2</div>
  </>
)

export default MyFunctionalComponent;
`;

// TODO @YashdalfTheGray 2020/11/23
//  there is something odd happening here that isn't happening
//  for the javascript case where we don't need the `createFragment`
//  import for typescript while we do need it for javascript. Need
//  to investigate.
const expected = `import createElement from '../src/index';

const MyFunctionalComponent = ({
  name
}) => createElement(createFragment, null, createElement("div", null, "Text 1"), createElement("div", null, "Text 2"));

export default MyFunctionalComponent;`;

export default new Test(
  'Component with fragments (TS)',
  testCode,
  expected,
  babelConfigForTs
);
