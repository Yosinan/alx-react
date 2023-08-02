import React from "react";
import { render } from "@testing-library/react";
import CourseList from "./CourseList";

describe("CourseList component", () => {
  it("should render CourseList component without crashing", () => {
    render(<CourseList />);
  });

  it("should render the 5 different rows", () => {
    const { container } = render(<CourseList />);
    const rows = container.querySelectorAll("tr");

    // We expect the table to have 5 rows (2 in the thead and 3 in the tbody)
    expect(rows.length).toBe(5);
  });
});
