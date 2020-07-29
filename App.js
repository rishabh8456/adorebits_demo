/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RootNavigator from './App/Navigators/RootNavigator';
import { Provider } from "react-redux";
import configureStore from '././App/Redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
const { persistor, store } = configureStore();
console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RootNavigator />
    </PersistGate>
  </Provider>
);

export default App;

