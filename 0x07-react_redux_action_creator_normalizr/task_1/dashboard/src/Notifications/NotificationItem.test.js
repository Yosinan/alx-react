import { shallow, Enzyme } from "enzyme";
// import Adapter from "enzyme-adapter-react-15";
import React from "react";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";
// Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// shallow render NotificationItem component
describe("<NotificationItem />", () => {
  it("Tests that NotificationItem renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Passes dumby `type` prop and checks for correct html rendering", () => {
    const wrapper = shallow(<NotificationItem type="urgent" />);
    expect(wrapper.html()).toContain("urgent");
  });

  it("Passes dumby `value` prop and checks for correct html rendering", () => {
    const wrapper = shallow(
      <NotificationItem value="This is a success notification" />
    );
    expect(wrapper.find("li").text()).toBe("This is a success notification");
  });

  it("Passes dumby `html` prop and checks for correct html rendering", () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: "dangerouslySetInnerHtml" }} />
    );
    expect(wrapper.html()).toContain("dangerouslySetInnerHtml");
  });
});
