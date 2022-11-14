import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

//Adding the recent year to the footage
let footerYear = "@ 2022 - " + new Date().getFullYear();
document.getElementById("footeryear").innerHTML = footerYear