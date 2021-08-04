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
              <img src={process.env.PUBLIC_URL + '/profile-background.png'} alt="profile__top__image"/>
              <Avatar className="sidebar__avatar" src={process.env.PUBLIC_URL + '/profile-image.jpg'}  alt="profile_img"/>
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
                  {recentItem("reactjs")}
                  {recentItem("vuejs")}
                  {recentItem("programming")}
                  {recentItem("softwareengineering")}
              </div>
        </div>
    )
}

export default Sidebar
