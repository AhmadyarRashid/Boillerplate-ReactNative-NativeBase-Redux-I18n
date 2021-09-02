import React from "react";
import type { Node } from "react";

import AppProviderWrapper from "./src/AppProviderWrapper";
import RootNavigation from "./src/Naviagtions";

const App: () => Node = () => (
  <AppProviderWrapper>
    <RootNavigation />
  </AppProviderWrapper>
);

export default App;
