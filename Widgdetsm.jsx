import React from 'react';
import "./Widgetsm.css"
import pic1 from "../Assets/user1.png"
import pic2 from "../Assets/user2.png"
import pic3 from "../Assets/user3.png"
import pic4 from "../Assets/user4.png"
import pic5 from "../Assets/user5.png"
import { MdVisibility } from 'react-icons/md';

const Widgdetsm = () => {
    return (
        <div className='widgetsm'>
           <div className="title">New Member</div>
         <ul className="list">
            <li className="item">
                <img src={pic1} alt="profile" />
                <div className='user'>
                    <span className="name">Anna Keller</span>
                    <span className="job">Software Engineer</span>
                </div>
                <button className='button'>
                <MdVisibility className='icon'/> Display
                </button>
            </li>
            <li className="item">
                <img src={pic2} alt="profile" />
                <div className='user'>
                    <span className="name">Anna Keller</span>
                    <span className="job">Software Engineer</span>
                </div>
                <button className='button'>
                <MdVisibility className='icon'/> Display
                </button>
            </li>
            <li className="item">
                <img src={pic3} alt="profile" />
                <div className='user'>
                    <span className="name">Anna Keller</span>
                    <span className="job">Software Engineer</span>
                </div>
                <button className='button'>
                <MdVisibility className='icon'/> Display
                </button>
            </li>
            <li className="item">
                <img src={pic4} alt="profile" />
                <div className='user'>
                    <span className="name">Anna Keller</span>
                    <span className="job">Software Engineer</span>
                </div>
                <button className='button'>
                <MdVisibility className='icon'/> Display
                </button>
            </li>
            <li className="item">
                <img src={pic5} alt="profile" />
                <div className='user'>
                    <span className="name">Anna Keller</span>
                    <span className="job">Software Engineer</span>
                </div>
                <button className='button'>
                <MdVisibility className='icon'/> Display
                </button>
            </li>
         </ul>
        </div>
    );
}

export default Widgdetsm;
