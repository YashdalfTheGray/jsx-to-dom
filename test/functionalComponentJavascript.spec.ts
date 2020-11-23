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

export default MyFunctionalComponent;
`;

const expected = `import createElement from '../src/index';

const MyFunctionalComponent = ({
  name
}) => createElement("div", {
  className: "container"
}, createElement("div", {
  className: "header"
}, createElement("strong", null, name)));

export default MyFunctionalComponent;`;

export default new Test(
  'Functional component (JS)',
  testCode,
  expected,
  babelConfigForJs
);
