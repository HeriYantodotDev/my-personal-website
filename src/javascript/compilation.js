import { about } from './about';
import { footer } from './footer';
import { footer } from './footer';
import { hero } from './hero';
import { project } from './project';
import { skills } from './skills';
import { social } from './social';
import { contact } from './contact';

export function compilation() {
  project(); //Adding Project Items to the HTML
  hero(); //adding Hero Detail
  about(); //adding About
  skills(); //adding skill list
  footer(); //Adding footer
  social(); //adding the social link
  contact(); //adding the contact element
}
