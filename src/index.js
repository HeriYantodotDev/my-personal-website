import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

import { footerYear } from "./footer";
import { hero } from "./hero";
import { about } from "./about";
// import {project} from './project';

initTiltEffect();
// project();
initScrollReveal(targetElements, defaultProps);
//adding Hero Detail
hero();
//adding About
about();
//Adding the recent year to the footage
footerYear();
//Generating Project


