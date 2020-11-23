import standardDomJs from './standardDomElementsJavascript.spec';
import standardDomTs from './standardDomElementsTypescript.spec';

import functionalComponentJs from './functionalComponentJavascript.spec';
import functionalComponentTs from './functionalComponentTypescript.spec';

import fragmentJs from './fragmentJavascript.spec';
import fragmentTs from './fragmentTypescript.spec';

[
  standardDomJs,
  standardDomTs,
  functionalComponentJs,
  functionalComponentTs,
  fragmentJs,
  fragmentTs,
].forEach((t) => t.run());
