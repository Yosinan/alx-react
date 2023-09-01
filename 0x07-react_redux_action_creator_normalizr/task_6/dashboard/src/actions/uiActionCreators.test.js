import * as uiActionCreators from "./uiActionCreators";
import * as uiActionTypes from "./uiActionTypes";

describe("Testing uiActionCreators", () => {
  it("test login action creator", () => {
    const expected = {
      type: uiActionTypes.LOGIN,
      user: { email: "example@example.com", password: "samplePass" },
    };
    expect(uiActionCreators.login("example@example.com", "samplePass")).toEqual(expected);
  });

  it("test logout action creator", () => {
    expect(uiActionCreators.logout().type).toEqual(uiActionTypes.LOGOUT);
  });

  it("test displayNotificationDrawer  action creator", () => {
    expect(uiActionCreators.displayNotificationDrawer().type).toEqual(
      uiActionTypes.DISPLAY_NOTIFICATION_DRAWER
    );
  });

  it("test hideNotificationDrawer  action creator", () => {
    expect(uiActionCreators.hideNotificationDrawer().type).toEqual(
      uiActionTypes.HIDE_NOTIFICATION_DRAWER
    );
  });
});
