import { Test, babelConfigForTs } from './helpers';

const testCode = `
import createElement from '../src/index';

type FunctionalComponent = (props: { name: string }) => HTMLElement;

const MyFunctionalComponent: FunctionalComponent =
  ({ name: string }) => (
    <div className="container">
      <div className="header">
        <strong>{name}</strong>
      </div>
    </div>
  );

export default MyFunctionalComponent;
`;

const expected = `import createElement from '../src/index';

const MyFunctionalComponent = ({
  name: string
}) => createElement("div", {
  className: "container"
}, createElement("div", {
  className: "header"
}, createElement("strong", null, name)));

export default MyFunctionalComponent;`;

export default new Test(
  'Functional Component (TS)',
  testCode,
  expected,
  babelConfigForTs
);
