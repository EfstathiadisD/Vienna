import React from "react";
import { ThemeProvider } from "emotion-theming";
import { render } from "@testing-library/react";

import { Main } from "@vienna/Interfaces/Themes";

import Text from ".";

describe("FrontendComponents", () => {
  it("should render with [Default Values] if no [Prop] is passed", () => {
    const { baseElement } = render(
      <ThemeProvider theme={Main}>
        <Text />
      </ThemeProvider>,
    );

    expect(baseElement).toBeTruthy();
  });
  it("should render with [Value] if no [Prop] is passed", () => {
    const { getByText } = render(
      <ThemeProvider theme={Main}>
        <Text>Text Element</Text>
      </ThemeProvider>,
    );
    expect(getByText("Text Element")).toBeTruthy();
  });
});
