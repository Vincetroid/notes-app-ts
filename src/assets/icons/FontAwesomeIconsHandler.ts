import {
  faGear,
  faNoteSticky,
  faCirclePlus,
  faTrash,
  faChevronCircleLeft,
  faPen,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

const addFontAwesomeIcons = () => {
  library.add(
    fab,
    faGear,
    faNoteSticky,
    faCirclePlus,
    faTrash,
    faChevronCircleLeft,
    faPen,
    faPlus,
  );
};

export default addFontAwesomeIcons;
