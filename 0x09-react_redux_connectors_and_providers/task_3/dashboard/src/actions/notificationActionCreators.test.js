import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";

describe("Testing notification Action Creators", () => {
  it("test makasread action", () => {
    const expected = {
      type: MARK_AS_READ,
      index: 1,
    };
    expect(markAsAread(1)).toEqual(expected);
  });

  it("test setNotificationFilter action", () => {
    const expected = {
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    };
    expect(
      setNotificationFilter(NotificationTypeFilters.DEFAULT)
    ).toEqual(expected);
  });
});
