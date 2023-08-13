import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

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

describe("Testing <App logOut={function} />", () => {
  it("verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
    const wrapper = mount(
      <App
        logOut={() => {
          console.log("ctrl and h are pressed");
        }}
      />
    );
    window.alert = jest.fn();
    const inst = wrapper.instance();
    const logout = jest.spyOn(inst, "logOut");
    const alert = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", {
      bubbles: true,
      ctrlKey: true,
      key: "h",
    });
    document.dispatchEvent(event);
    expect(alert).toBeCalledWith("Logging you out");
    expect(logout).toBeCalled();
    alert.mockRestore();
  });
});
