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

  it("verify that CourseList renders correctly if you pass an empty array or if you don’t pass the listCourses property", () => {
    const listCourses = [];
    let wrapper = shallow(<CourseList />);
    expect(wrapper.find("CourseListRow").last().props().textFirstCell).toEqual(
      "No course available yet"
    );
    wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find("CourseListRow").last().props().textFirstCell).toEqual(
      "No course available yet"
    );
  });
});

describe("Testing <CourseList listCourses={listCourses}/>", () => {
  let wrapper;

  beforeEach(() => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    wrapper = shallow(<CourseList listCourses={listCourses} />);
  });

  it("verify that when you pass a list of courses, the component renders it correctly", () => {
    expect(
      wrapper.findWhere((node) => {
        return node.props().textFirstCell === "ES6";
      })
    ).toHaveLength(1);
    expect(
      wrapper.findWhere((node) => {
        return node.props().textFirstCell === "Webpack";
      })
    ).toHaveLength(1);
    expect(
      wrapper.findWhere((node) => {
        return node.props().textFirstCell === "React";
      })
    ).toHaveLength(1);
  });
});
