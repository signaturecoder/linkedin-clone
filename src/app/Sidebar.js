import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'

const Sidebar = () => {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
          <div className="sidebar__top">
              <img src="https://media-exp1.licdn.com/dms/image/C5616AQEROI6LIxxqwA/profile-displaybackgroundimage-shrink_200_800/0/1609775836785?e=1622678400&v=beta&t=_dsGswMMpGjoijXeM3ce0kutNIGNfDIRAfhPtR4aCPE" alt="profile__top__image"/>
              <Avatar className="sidebar__avatar" src="https://media-exp1.licdn.com/dms/image/C5103AQHZzVgL2-g24g/profile-displayphoto-shrink_800_800/0/1571117334679?e=1622678400&v=beta&t=Re25bLczrga6FSIruKn5d-0h2T2vWf20bWlRUxv7sIQ" alt="profile_img"/>
              <h2>Sanu Kumar</h2>
              <h4>Full Stack Web Developer</h4>
          </div>
          <div className="sidebar__stats">
                  <div className="sidebar__stat">
                      <p>Who viewed your profile</p>
                      <p className="sidebar__statNumber">2502</p>
                  </div>
                  <div className="sidebar__stat">
                      <p>Who viewed your profile</p>
                      <p className="sidebar__statNumber">2425</p>
                  </div>

              </div>

              <div className="sidebar__bottom">
                  <p>Recent</p>
                  {
                  recentItem("reactjs")}
                  {recentItem("vuejs")}
                  {recentItem("programming")
                  
                  }
                  {recentItem("softwareengineering")}
              </div>
        </div>
    )
}

export default Sidebar
