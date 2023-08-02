import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders a div with the class root-notifications", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".root-notifications")).toHaveLength(1);
  });

  it("renders a div with the class App-header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-header")).toHaveLength(1);
  });

  it("renders a div with the class App-body", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-body")).toHaveLength(1);
  });

  it("renders a div with the class App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-footer")).toHaveLength(1);
  });

  it("should not display CourseList when isLoggedIn is false", () => {
    const { queryByText } = render(<App />);
    const courseListElement = queryByText(/Course List/i);
    expect(courseListElement).toBeNull();
  });

  describe("when isLoggedIn is true", () => {
    it("should not include the Login component", () => {
      const { queryByText } = render(<App isLoggedIn={true} />);
      const loginElement = queryByText(/Login/i);
      expect(loginElement).toBeNull();
    });

    it("should include the CourseList component", () => {
      const { queryByText } = render(<App isLoggedIn={true} />);
      const courseListElement = queryByText(/Course List/i);
      expect(courseListElement).toBeInTheDocument();
    });
  });
});
