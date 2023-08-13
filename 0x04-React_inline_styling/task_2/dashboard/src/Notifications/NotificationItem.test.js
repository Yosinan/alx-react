// import { shallow, Enzyme } from "enzyme";
// // import Adapter from "enzyme-adapter-react-15";
// import React from "react";
// import NotificationItem from "./NotificationItem";
// import { render } from "@testing-library/react";
// import { StyleSheetTestUtils } from "aphrodite";
// import "@testing-library/jest-dom/extend-expect";
// // Enzyme.configure({ adapter: new Adapter() });

// beforeEach(() => {
//   StyleSheetTestUtils.suppressStyleInjection();
// });

// // shallow render NotificationItem component
// describe("<NotificationItem />", () => {
//   it("Tests that NotificationItem renders without crashing", () => {
//     // const wrapper = shallow(<NotificationItem />);
//     const container = render(<NotificationItem />);
//     expect(container.exists()).toBe(true);
//     // expect(wrapper.exists()).toBe(true);
//   });

//   it("Passes dumby `type` prop and checks for correct html rendering", () => {
//     // const wrapper = shallow(<NotificationItem type="urgent" />);
//     // expect(wrapper.html()).toContain("urgent");

//     const container = render(<NotificationItem type="urgent" />);
//     expect(container.html()).toContain("urgent");
//   });

//   it("Passes dumby `value` prop and checks for correct html rendering", () => {
//     // const wrapper = shallow(
//     //   <NotificationItem value="This is a success notification" />
//     // );
//     // expect(wrapper.find("li").text()).toBe("This is a success notification");

//     const container = render(
//       <NotificationItem value="This is a success notification" />
//     );
//     expect(container.html()).toContain("This is a success notification");
//   });

//   it("Passes dumby `html` prop and checks for correct html rendering", () => {
//     // const wrapper = shallow(
//     //   <NotificationItem html={{ __html: "dangerouslySetInnerHtml" }} />
//     // );
//     // expect(wrapper.html()).toContain("dangerouslySetInnerHtml");

//     const container = render(
//       <NotificationItem html={{ __html: "dangerouslySetInnerHtml" }} />
//     );
//     expect(container.html()).toContain("dangerouslySetInnerHtml");
//   });
// });

import React from "react";
import NotificationItem from "./NotificationItem";
import { render } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";
import "@testing-library/jest-dom/extend-expect";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe("<NotificationItem />", () => {
  it("Tests that NotificationItem renders without crashing", () => {
    const { container } = render(<NotificationItem />);
    expect(container).toBeInTheDocument();
  });

  it("Passes dummy `type` prop and checks for correct HTML rendering", () => {
    const { container } = render(<NotificationItem type="urgent" />);
    expect(container.innerHTML).toContain("urgent");
  });

  it("Passes dummy `value` prop and checks for correct HTML rendering", () => {
    const { container } = render(
      <NotificationItem value="This is a success notification" />
    );
    expect(container.innerHTML).toContain("This is a success notification");
  });

  it("Passes dummy `html` prop and checks for correct HTML rendering", () => {
    const { container } = render(
      <NotificationItem html={{ __html: "dangerouslySetInnerHtml" }} />
    );
    expect(container.innerHTML).toContain("dangerouslySetInnerHtml");
  });
});
