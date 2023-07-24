import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { compilation } from './javascript/compilation';


compilation() // Injecting HTML & Content

// Running Animation << start >>
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
// Running Animation << end >>
