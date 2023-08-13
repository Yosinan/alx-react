import React from "react";
import { shallow } from "enzyme";
import Login from "./Login"; // Import the Login component

describe("Login component", () => {
  it("renders without crashing", () => {
    // Shallow render the Login component
    const wrapper = shallow(<Login />);

    expect(wrapper.exists()).toBe(true);
  });

  it("renders 2 input tags and 2 label tags", () => {
    // Shallow render the Login component
    const wrapper = shallow(<Login />);

    // Find all input and label elements within the component
    const inputElements = wrapper.find("input");
    const labelElements = wrapper.find("label");

    expect(inputElements).toHaveLength(2);
    expect(labelElements).toHaveLength(2);
  });
});
