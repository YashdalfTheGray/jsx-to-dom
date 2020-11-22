import standardDomJs from './standardDomElementsJavascript.spec';
import standardDomTs from './standardDomElementsTypescript.spec';
import functionalComponentJs from './functionalComponentJavascript.spec';
import functionalComponentTs from './functionalComponentTypescript.spec';

[
  standardDomJs,
  standardDomTs,
  functionalComponentJs,
  functionalComponentTs,
].forEach((t) => t.run());
