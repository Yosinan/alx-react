import * as notifications from "../../notifications.json";
import { normalize, schema } from "normalizr";

export function getAllNotificationsByUser(userId) {
  const selectedNotifications = notifications.default.filter(
    (notification) => notification.author.id === userId
  );
  return selectedNotifications.map((notification) => notification.context);
}

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizedData = normalize(notifications.default, [notification]);
