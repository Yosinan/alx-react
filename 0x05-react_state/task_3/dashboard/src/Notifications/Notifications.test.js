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

  it("verify that Notifications renders correctly if you dont pass the listNotifications property or if you pass an empty array", () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find("NotificationItem").first().html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
    wrapper.setProps({ displayDrawer: true, listNotifications: [] });
    expect(wrapper.find("NotificationItem").first().html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
  });

  it("verify that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is", () => {
    wrapper.setProps({ displayDrawer: true, listNotifications: [] });
    expect(wrapper.find("NotificationItem").first().html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
    expect(
      wrapper.findWhere((node) => {
        return node.text() === "Here is the list of notifications";
      })
    ).toHaveLength(0);
  });
});

describe("<Notifications /> with listNotifications", () => {
  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
  ];
  const wrapper = shallow(
    <Notifications displayDrawer={true} listNotifications={listNotifications} />
  );
  it("renders three list items", () => {
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
    expect(wrapper.find("NotificationItem").first().props().value).toEqual(
      "New course available"
    );
  });
});

describe("Testing markAsRead method in the notification class Component", () => {
  it("Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
    const listNotifications = [
      { id: 1, value: "New course available", type: "default" },
      { id: 2, value: "New resume available", type: "urgent" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
    ];
    console.log = jest.fn();
    const wrapper = mount(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const mock = jest.spyOn(console, "log");
    const noti = wrapper.find("li").first();
    noti.simulate("click");
    expect(mock).toBeCalledWith("Notification 1 has been marked as read");
    mock.mockRestore();
  });

  it("Verify that when updating the props of the component with the same list, the component doesn't rerender", () => {
    const listNotifications = [
      { id: 1, value: "New course available", type: "default" },
      { id: 2, value: "New resume available", type: "urgent" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
    ];
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      "shouldComponentUpdate"
    );
    wrapper.setProps({
      displayDrawer: true,
      listNotifications: listNotifications,
    });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
    shouldComponentUpdate.mockRestore();
  });

  it("Verify that when updating the props of the component with a longer list, the component does rerender", () => {
    const listNotifications = [
      { id: 1, value: "New course available", type: "default" },
      { id: 2, value: "New resume available", type: "urgent" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
    ];
    const longerList = [
      { id: 1, value: "New course available", type: "default" },
      { id: 2, value: "New resume available", type: "urgent" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
      { id: 4, value: "New messages available", type: "urgent" },
    ];
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      "shouldComponentUpdate"
    );
    wrapper.setProps({ displayDrawer: true, listNotifications: longerList });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
    shouldComponentUpdate.mockRestore();
  });

  describe("Testing Notifications Component Drawer Display handlers ", () => {
    let wrapper;
  
    beforeEach(() => {
      StyleSheetTestUtils.suppressStyleInjection();
      wrapper = mount(<Notifications handleDisplayDrawer={jest.fn()} handleHideDrawer={jest.fn()}/>);
    });
  
    it("verify that clicking on the menu item calls handleDisplayDrawer", () => {
      (wrapper.find('div').at(0)).simulate('click');
      expect(wrapper.props().handleDisplayDrawer).toBeCalled();
    });
  
    it("verify that clicking on the button calls handleHideDrawer", () => {
      wrapper.setProps({displayDrawer: true});
      (wrapper.find('button').at(0)).simulate('click');
      expect(wrapper.props().handleHideDrawer).toBeCalled();
    });

});
