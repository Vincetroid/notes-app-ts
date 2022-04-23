import * as React from 'react';
import TabBottomNavigator from './src/navigators/TabBottomNavigator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faGear,
  faNoteSticky,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';

export default function App() {
  React.useEffect(() => {
    library.add(fab, faGear, faNoteSticky, faCirclePlus);
  }, []);

  return <TabBottomNavigator />;
}
