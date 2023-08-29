import * as notifications from "../../notifications.json";

export function getAllNotificationsByUser(userId) {
  const selectedNotifications = notifications.default.filter(
    (notification) => notification.author.id === userId
  );
  return selectedNotifications.map((notification) => notification.context);
}
