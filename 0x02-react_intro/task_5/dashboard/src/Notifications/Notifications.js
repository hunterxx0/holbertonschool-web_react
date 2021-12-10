import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';


export default function Notifications() {
	return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
      <button style={{position:'fixed', top: '1em', right: '1em', background: 'transparent', border: 'none'}} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
        <img src={close_icon} style={{width:'20px', height: '20px'}}/>
      </button>
    </div>
  );
}