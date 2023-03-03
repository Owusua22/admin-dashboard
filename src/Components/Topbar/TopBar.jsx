import React from 'react';
import "./TopBar.css"
import pic1 from "../Assets/logo.png"
import pic2 from "../Assets/me.jpg"
import {GrNotification , GrLanguage, GrUserSettings}  from "react-icons/gr"


const TopBar = () => {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topleft">
                    <img src={pic1} alt="logo" className='logo' />
                </div>
                <div className="topRight">
                    <div className='topbarIconContainer'>
                < GrNotification style={{fontSize:"25px"}} />
                <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                < GrLanguage style={{fontSize:"25px"}} />
                <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                < GrUserSettings style={{fontSize:"25px"}} />
                <span className='topIconBadge'>2</span>
                    </div>
                    <img src={pic2} alt="profile pic" className='profile' />
                </div>
            </div>
            
        </div>
    );
}

export default TopBar;
