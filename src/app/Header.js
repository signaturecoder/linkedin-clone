import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src={process.env.PUBLIC_URL + '/linkedIn-logo.png'} alt="linkedIn logo" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5103AQHZzVgL2-g24g/profile-displayphoto-shrink_800_800/0/1571117334679?e=1622678400&v=beta&t=Re25bLczrga6FSIruKn5d-0h2T2vWf20bWlRUxv7sIQ" title="Me"/>
            </div>
    
        </div>
    )
}

export default Header
