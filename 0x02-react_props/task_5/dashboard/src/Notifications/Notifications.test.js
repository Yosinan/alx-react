import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
  // test that Notifications renders without crashing
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  // test list of notifications
  it("renders three list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("li")).toHaveLength(3);
  });

  // Notifications renders the text 'Here is the list of notifications'
  it("renders the text in the notifications", () => {
    const text = "Here is the list of notifications";
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("p").text()).toBe(text);
  });

  it("should not display the div.Notifications when displayDrawer is false", () => {
    const { queryByText } = render(<Notifications />);
    const notificationsElement = queryByText(
      /Notifications are displayed here/i
    );
    expect(notificationsElement).not.toBeInTheDocument();
  });

  it("should display the menu item when displayDrawer is true", () => {
    const { queryByText } = render(<Notifications displayDrawer={true} />);
    const menuItemElement = queryByText(/Your notifications/i);
    expect(menuItemElement).toBeInTheDocument();
  });
});
