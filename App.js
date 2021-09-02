import React from "react";
import type { Node } from "react";

import AppProviderWrapper from "./src/AppProviderWrapper";
import MainScreen from "./src/components/Main";

const App: () => Node = () => (
  <AppProviderWrapper>
    <MainScreen />
  </AppProviderWrapper>
);

export default App;
