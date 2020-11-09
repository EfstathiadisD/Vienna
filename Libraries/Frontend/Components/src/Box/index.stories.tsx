import React from "react";
import Box from ".";

import { ThemeProvider } from "emotion-theming";
import { Main } from "@vienna/Interfaces/Themes";

export default {
  title: "Box",
};

export const Basic = () => (
  <ThemeProvider theme={Main}>
    <Box>This is a Basic Text Component</Box>
  </ThemeProvider>
);
