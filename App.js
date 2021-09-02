import React from 'react';
import type {Node} from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';

import configureStore from './src/redux/configureStore';
import MainScreen from "./src/components/Main";

const store = configureStore()

const App: () => Node = () => (
    <Provider store={store}>
      <NativeBaseProvider>
        <MainScreen />
      </NativeBaseProvider>
    </Provider>
);

export default App;
