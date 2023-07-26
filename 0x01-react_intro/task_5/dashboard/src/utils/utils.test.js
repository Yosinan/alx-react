import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Get full year", function() {
    // should return the correct year
  it("should return the correct year", function() {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
})

// should return the correct footer message based on the argument
describe("Get footer message", function() {
  const trueMessage = 'Holberton School';
  const falseMessage = 'Holberton School main dashboard';

  // should return the true footer message
  it("should return the true footer message", function() {
    const currentMessage = getFooterCopy(true);
    expect(currentMessage).toBe(trueMessage);
  });

    // should return the false footer message
  it("should return the false footer message", function() {
    const currentMessage = getFooterCopy(false);
    expect(currentMessage).toBe(falseMessage);
  })
})

// should return the correct string when calling getLatestNotification
describe("Get latest notification", function() {
  it("should return the urgent message text", function() {
    const message = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(message).toBe(getLatestNotification());
  });
})
