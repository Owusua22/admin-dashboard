import React from 'react';
import Chart from '../Charts/Chart';
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo';
import "./Home.css"
import {userData} from "../../DummyData"
import Widgdetsm from '../widgetsm/Widgdetsm';
import Widgetlg from '../Widgetlg/Widgetlg';


const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
            <div className="homewidget">
                <Widgdetsm />
                <Widgetlg />
            </div>
        </div>
    );
}

export default Home;
