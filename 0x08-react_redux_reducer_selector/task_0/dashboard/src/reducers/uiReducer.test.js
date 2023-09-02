import { uiReducer, initialState } from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe("uiReducer", () => {
  it("verifies the default state returned by the reducer is equal to the initial state", () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("verifies that the action SELECT_COURSE returns the correct state", () => {
    const state = uiReducer(undefined, { type: "SELECT_COURSE" });
    expect(state).toEqual(initialState);
  });

  it("verifies that the action DISPLAY_NOTIFICATION_DRAWER returns the correct state", () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });
});
