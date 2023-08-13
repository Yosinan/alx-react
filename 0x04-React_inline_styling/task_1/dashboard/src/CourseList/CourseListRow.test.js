import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CourseListRow from "./CourseListRow";

describe("CourseListRow component", () => {
  it("should render one cell with colspan = 2 when isHeader is true and textSecondCell does not exist", () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header Text" />
        </tbody>
      </table>
    );

    const thElement = container.querySelector("th");
    expect(thElement).toBeInTheDocument();
    expect(thElement.getAttribute("colSpan")).toBe("2");
  });

  it("should render two cells when isHeader is true and textSecondCell is present", () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow
            isHeader={true}
            textFirstCell="Header Text 1"
            textSecondCell="Header Text 2"
          />
        </tbody>
      </table>
    );

    const thElements = container.querySelectorAll("th");
    expect(thElements.length).toBe(2);
  });

  it("should render correctly two td elements within a tr element when isHeader is false", () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow
            isHeader={false}
            textFirstCell="Data Text 1"
            textSecondCell="Data Text 2"
          />
        </tbody>
      </table>
    );

    const trElement = container.querySelector("tr");
    const tdElements = container.querySelectorAll("td");
    expect(trElement).toBeInTheDocument();
    expect(tdElements.length).toBe(2);
  });
});
