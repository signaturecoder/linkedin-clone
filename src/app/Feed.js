import React from 'react'
import './Feed.css'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Avatar from '@material-ui/core/Avatar';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__top">
            <div className="feed__search">
                <Avatar className="feed__avatar" src="https://media-exp1.licdn.com/dms/image/C5103AQHZzVgL2-g24g/profile-displayphoto-shrink_800_800/0/1571117334679?e=1622678400&v=beta&t=Re25bLczrga6FSIruKn5d-0h2T2vWf20bWlRUxv7sIQ" alt="image"/>
                <input type="text"/>
            </div>
            <div class="feed__options">
                <InputOption title="Photo" iconColor="#7085F9" Icon={ImageIcon}/>
                <InputOption title="Video" iconColor="#E7A33E" Icon={ SubscriptionsIcon}/>
                <InputOption title="Event" iconColor=" #C0CBCD" Icon={EventNoteIcon }/>
                <InputOption title="Write article" iconColor="#7FC15E" Icon={ CalendarViewDayIcon }/>
            </div>
            </div>
            
        </div>
    )
}

export default Feed
