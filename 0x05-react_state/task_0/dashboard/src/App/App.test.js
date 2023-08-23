import React from "react";
import { shallow, mount } from "enzyme";
import { jest } from "@jest/globals";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";

describe("Test App.js", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  });

  it("Renders App without crashing", () => {
    expect(wrapper.exists());
  });

  it("App component contains Notifications component", () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("App component contains Header component", () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it("App component contains Login component", () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("App component contains Footer component", () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it("test to check that CourseList is not displayed inside App", () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App isLoggedIn={true} />);
  });

  it("the Login component is not included", () => {
    expect(wrapper.find("Login")).toHaveLength(0);
  });

  it("the CourseList component is included", () => {
    expect(wrapper.find("CourseList").exists());
  });
});

describe("Testing <App logOut={function} />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

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

describe("Testing App Component's State />", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  });

  it("check if default value of displayDrawer in state is false", () => {
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it("Verify that after calling handleDisplayDrawer, the state displayDrawer should now be true", () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state("displayDrawer")).toBe(true);
  });

  it("verify that after calling handleHideDrawer, the state displayDrawer is updated to be false", () => {
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state("displayDrawer")).toBe(false);
  });
});

// describe("App component", () => {
//   it("renders without crashing", () => {
//     shallow(<App />);
//   });

//   it("renders a div with the class root-notifications", () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(".root-notifications")).toHaveLength(1);
//   });

//   it("renders a div with the class App-header", () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(".App-header")).toHaveLength(1);
//   });

//   it("renders a div with the class App-body", () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(".App-body")).toHaveLength(1);
//   });

//   it("renders a div with the class App-footer", () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(".App-footer")).toHaveLength(1);
//   });

//   it("should not display CourseList when isLoggedIn is false", () => {
//     const { queryByText } = render(<App />);
//     const courseListElement = queryByText(/Course List/i);
//     expect(courseListElement).toBeNull();
//   });

//   describe("when isLoggedIn is true", () => {
//     it("should not include the Login component", () => {
//       const { queryByText } = render(<App isLoggedIn={true} />);
//       const loginElement = queryByText(/Login/i);
//       expect(loginElement).toBeNull();
//     });

//     it("should include the CourseList component", () => {
//       const { queryByText } = render(<App isLoggedIn={true} />);
//       const courseListElement = queryByText(/Course List/i);
//       expect(courseListElement).toBeInTheDocument();
//     });
//   });
// });

// describe("Testing App Component's State />", () => {
//   let wrapper;

//   beforeEach(() => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     wrapper = shallow(<App />);
//   });

//   it("check if default value of displayDrawer in state is false", () => {
//     expect(wrapper.state("displayDrawer")).toBe(false);
//   });

//   it("Verify that after calling handleDisplayDrawer, the state displayDrawer should now be true", () => {
//     wrapper.instance().handleDisplayDrawer();
//     expect(wrapper.state("displayDrawer")).toBe(true);
//   });

//   it("verify that after calling handleHideDrawer, the state displayDrawer is updated to be false", () => {
//     wrapper.instance().handleHideDrawer();
//     expect(wrapper.state("displayDrawer")).toBe(false);
//   });
// });

// describe("Testing <App logOut={function} />", () => {
//   it("verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
//     const wrapper = mount(
//       <App
//         logOut={() => {
//           console.log("ctrl and h are pressed");
//         }}
//       />
//     );
//     window.alert = jest.fn();
//     const inst = wrapper.instance();
//     const logout = jest.spyOn(inst, "logOut");
//     const alert = jest.spyOn(window, "alert");
//     const event = new KeyboardEvent("keydown", {
//       bubbles: true,
//       ctrlKey: true,
//       key: "h",
//     });
//     document.dispatchEvent(event);
//     expect(alert).toBeCalledWith("Logging you out");
//     expect(logout).toBeCalled();
//     alert.mockRestore();
//   });
// });
