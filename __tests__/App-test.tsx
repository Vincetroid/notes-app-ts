import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// TODO: Fix error:
// TypeError: Cannot read properties of undefined (reading 'flushOperations')con tu plan
//       at Object.<anonymous> (node_modules/react-native-gesture-handler/lib/commonjs/RNGestureHandlerModule.ts:19:28)
//       at Object.<anonymous> (node_modules/react-native-gesture-handler/lib/commonjs/init.ts:2:1)
it('renders correctly', () => {
  renderer.create(<App />);
});
