import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this line for the matchers


import BodySection from "./BodySection";

test("renders correctly with children and h2 element", () => {
  const { getByText } = render(
    <BodySection title="test title">
      <p>some text</p>
    </BodySection>
  );

  const h2Element = getByText(/test title/i);
  const pElement = getByText(/some text/i);

  expect(h2Element).toHaveTextContent("test title");
  expect(pElement).toHaveTextContent("some text");
});
