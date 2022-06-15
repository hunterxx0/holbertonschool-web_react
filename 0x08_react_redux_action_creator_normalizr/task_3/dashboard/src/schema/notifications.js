import * as notifications from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export default function getAllNotificationsByUser(userId) {
	const notifs = normalizedData.entities.notifications;
  const messags = normalizedData.entities.messages;
  const res = [];

  for (let key in notifs) {
    if (notifs[key].author === userId) {
      const context = notifs[key].context;
      res.push(messags[context]);
    }
  }

  return res;
}


const user = new schema.Entity("users")

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});
export const normalizedData = normalize(notifications.default, [notification]);