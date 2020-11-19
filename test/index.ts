import standardDomJs from './standardDomElementsJavascript.spec';
import standardDomTs from './standardDomElementsTypescript.spec';

const tests = [standardDomJs, standardDomTs];

tests.forEach((t) => t.run());
