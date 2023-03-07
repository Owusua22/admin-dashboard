import React from 'react';
import "./Sidebar.css"
import {FaHome, FaUserCircle, FaBusinessTime} from "react-icons/fa"
import {TbTimeline} from "react-icons/tb"
import {FiTrendingUp, FiMessageSquare ,  } from "react-icons/fi"
import {BiStore} from "react-icons/bi"
import {MdAttachMoney, MdOutlineEmail , MdDynamicFeed, MdReport} from "react-icons/md"
import {BsBarChartFill} from "react-icons/bs"
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
           <div className="sidebarWrapper">
            <div className="sidebarmenu">
                <h2 className="sidebarTitle">
                    Dashboard
                </h2>
                <ul className='sidebarList'>
                    <Link to="/" className='link'>
                    <li className='sidebaritem ' >
                    
                    <FaHome />
                    Home
                    </li>
                    </Link>
                    <li className='sidebaritem' >
                    <TbTimeline />
                    Analytics
                    </li>
                    <li className='sidebaritem' >
                    <FiTrendingUp />
                    Sales
                    </li>
                   </ul>
            </div>
            <div className="sidebarmenu">
                <h2 className="sidebarTitle">
                    Quick Menu
                </h2>
                <ul className='sidebarList'>
                    <Link to="/users" className='link'>
                    <li className='sidebaritem' >
                    <FaUserCircle/>
                    Customers
                    </li>
                    </Link>
                    <Link to="/products" className='link'>
                    <li className='sidebaritem' >
                    <BiStore />
                    Products
                    </li>
                    </Link>
                    <li className='sidebaritem' >
                    <MdAttachMoney/>
                    Transactions
                    </li>
                    <li className='sidebaritem' >
                    <BsBarChartFill/>
                    Report
                    </li>
                   </ul>
            </div>
            <div className="sidebarmenu">
                <h2 className="sidebarTitle">
                    Notifications
                </h2>
                <ul className='sidebarList'>
                    <li className='sidebaritem' >
                    <MdOutlineEmail />
                    Mail
                    </li>
                    <li className='sidebaritem' >
                    <MdDynamicFeed />
                    Feedback
                    </li>
                    <li className='sidebaritem' >
                    <FiMessageSquare />
                        Messages
                    </li>
                   </ul>
            </div>
            <div className="sidebarmenu">
                <h2 className="sidebarTitle">
                    Staff
                </h2>
                <ul className='sidebarList'>
                    <li className='sidebaritem' >
                    <FaBusinessTime />
                    Manage
                    </li>
                    <li className='sidebaritem' >
                    <TbTimeline />
                    Analytics
                    </li>
                    <li className='sidebaritem' >
                    <MdReport />
                    Reports
                    </li>
                   </ul>
            </div>
           </div>
        </div>
    );
}

export default Sidebar;
