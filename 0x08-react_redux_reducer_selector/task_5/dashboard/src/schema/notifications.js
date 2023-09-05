import * as notifications from "../../notifications.json";
import { normalize, schema } from "normalizr";

export function getAllNotificationsByUser(userId) {
  const notis = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  const result = [];

  for (const key in notis) {
    if (notis[key].author === userId) {
      result.push(messages[notis[key].context]);
    }
  }

  return result;
}

export function notificationNormalizer(data) {
  return normalize(data, [notification]).entities;
}

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizedData = normalize(notifications.default, [notification]);
