import React from "react";
import Text from ".";

import { ThemeProvider } from "emotion-theming";
import { Main } from "@vienna/Interfaces/Themes";

export default {
  title: "Text",
};

export const Basic = () => (
  <ThemeProvider theme={Main}>
    <Text>This is a Basic Text Component</Text>
  </ThemeProvider>
);
