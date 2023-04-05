import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

import { footerYear } from "./footer";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

//Adding the recent year to the footage
footerYear();
