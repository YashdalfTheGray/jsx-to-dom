import { Test, babelConfigForJs } from './helpers';

const testCode = `
import createElement from '../src/index';

const MyFunctionalComponent = ({ name }) => (
  <div className="container">
    <div className="header">
      <strong>{name}</strong>
    </div>
  </div>
)
`;

const expected = `import createElement from '../src/index';

const MyFunctionalComponent = ({
  name
}) => createElement("div", {
  className: "container"
}, createElement("div", {
  className: "header"
}, createElement("strong", null, name)));`;

export default new Test(
  'Functional Component (JS)',
  testCode,
  expected,
  babelConfigForJs
);
