import React from 'react';
import "./FeaturedInfo.css"
import {AiOutlineArrowDown} from "react-icons/ai"
import {MdArrowUpward} from "react-icons/md"

const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <h3 className='featuredTitle'>
                Revenue
                </h3>
                <div className="featuredmoneyContainer">
                    <span className="featuredmoney">Ghc 2400.15</span>
                    <span className="featuredmoneyrater">-11.4
                    <AiOutlineArrowDown className='icon negative'/>
                    </span>
                    </div>
                    <span className="featuredmoneysub">Compared to last month</span>
                    </div>
                    <div className="featuredItem">
                    <h3 className='featuredTitle'>
                Sales
                </h3>
                <div className="featuredmoneyContainer">
                    <span className="featuredmoney">Ghc 5500.32</span>
                    <span className="featuredmoneyrater">-100.4
                    <AiOutlineArrowDown className='icon negative'/>
                    </span>
                    </div>
                    <span className="featuredmoneysub">Compared to last month</span>
                    </div>
                    <div className="featuredItem">
                    <h3 className='featuredTitle'>
                Cost
                </h3>
                <div className="featuredmoneyContainer">
                    <span className="featuredmoney">Ghc 77.41</span>
                    <span className="featuredmoneyrater">+34.4
                    <MdArrowUpward className='icon '/>
                    </span>
                    </div>
                    <span className="featuredmoneysub">Compared to last month</span>
                    </div>
            

        </div>
    );
}

export default FeaturedInfo;
