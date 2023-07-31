import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';


export default function Notifications () {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button 
                style={{ 
                    float: 'right',
                    backgroundColor: '#fff',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    marginTop: '-70px', 
                }} 
                onClick={console.log('Close button has been clicked')}
                aria-label='Close'
            >
                    <img src={closeIcon} alt='close-icon' />
            </button>
            <ul>
                <NotificationItem type='default' value='New course available' />
                <NotificationItem type='urgent' value='New resume available' />
                <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    )
}