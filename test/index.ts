import standardDomJs from './standardDomElementsJavascript.spec';
import standardDomTs from './standardDomElementsTypescript.spec';
import functionalComponentJs from './functionalComponentJavascript.spec';

[standardDomJs, standardDomTs, functionalComponentJs].forEach((t) => t.run());
