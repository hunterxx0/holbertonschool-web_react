import React from 'react';
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";


describe('notifications check', () => {
  test('check notificationActionCreators', () => {
    const filter = "DEFAULT"
    const expected = {
      'type': 'SET_TYPE_FILTER',
      filter
    };
    expect(setNotificationFilter(filter))
      .toStrictEqual(expected);
  });

  test('check markAsAread' , () => {
    const index = 1;
    const expected = {
      index,
      type: 'MARK_AS_READ'
    }
    expect(markAsAread(index)).toStrictEqual(expected);
  });

});