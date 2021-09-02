import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';

import configureStore from "./redux/configureStore";

const store = configureStore()

function AppProviderWrapper({children}){
  return(
    <Provider store={store}>
      <NativeBaseProvider>
        {children}
      </NativeBaseProvider>
    </Provider>
  )
}

export default AppProviderWrapper;
