import { library } from "@fortawesome/fontawesome-svg-core";
import { far,faCheckCircle as faCheckCircleRegular,faUser,faClipboard} from "@fortawesome/free-regular-svg-icons";

import {
  fas,
  faHome,
  faAppleAlt,
  faArrowLeft,
  faChevronLeft,
  faChevronCircleLeft,
  faPencilAlt,
  faPlus,
  faMinus,
  faTimes,
  faStickyNote,
  faAngleLeft,
  faBars
} from "@fortawesome/free-solid-svg-icons";

console.log(far);
library.add(
  faHome,
  faAppleAlt,
  faArrowLeft,
  faChevronLeft,
  faChevronCircleLeft,
  faStickyNote,
  faClipboard,
  faPencilAlt,
  faPlus,
  faMinus,
  faTimes,
  faCheckCircleRegular,
  faUser,
  faAngleLeft,
  faBars
);
