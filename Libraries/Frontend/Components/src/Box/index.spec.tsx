import React from "react";
import { ThemeProvider } from "emotion-theming";
import { render } from "@testing-library/react";

import { Main } from "@vienna/Interfaces/Themes";

import Box from ".";

describe("FrontendComponents", () => {
  it("should render with [Default Values] if no [Prop] is passed", () => {
    const { baseElement } = render(
      <ThemeProvider theme={Main}>
        <Box />
      </ThemeProvider>,
    );

    expect(baseElement).toBeTruthy();
  });
  it("should render with [Value] if no [Prop] is passed", () => {
    const { getByText } = render(
      <ThemeProvider theme={Main}>
        <Box>Box Element</Box>
      </ThemeProvider>,
    );
    expect(getByText("Box Element")).toBeTruthy();
  });
});
