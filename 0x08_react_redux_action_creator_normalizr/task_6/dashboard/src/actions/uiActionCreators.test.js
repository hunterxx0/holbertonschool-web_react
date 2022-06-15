import React from 'react';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';


describe('notifications check', () => {
  test('check login' , () => {
    const data = login('test@test.com', 'test');
    const result = { type: LOGIN, user: { email: 'test@test.com', password: 'test' } };
    expect(data).toStrictEqual(result);
  });

  test('check logout', () => {
    const data = logout(1);
    const result = { type: LOGOUT };
    expect(data).toStrictEqual(result);
  });

  test('check show drawer', () => {
    const data = displayNotificationDrawer(1);
    const result = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(data).toStrictEqual(result);
  });

  test('check hide drawer', () => {
    const data = hideNotificationDrawer(1);
    const result = { type: HIDE_NOTIFICATION_DRAWER };
    expect(data).toStrictEqual(result);
  });


});