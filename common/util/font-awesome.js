import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faCoffee } from '@fortawesome/free-solid-svg-icons';

export const loadIcons = () => {
  library.add(faCheck, faCoffee);
};
