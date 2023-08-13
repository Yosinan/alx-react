import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

test("renders BodySection component with correct props", () => {
  const mockProps = {
    title: "test title",
    children: <p>some text</p>,
  };

  const { getByText } = render(<BodySectionWithMarginBottom {...mockProps} />);

  const h2Element = getByText(/test title/i);
  const pElement = getByText(/some text/i);

  expect(h2Element).toBeInTheDocument();
  expect(pElement).toBeInTheDocument();
});
