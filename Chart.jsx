import React from 'react';
import { LineChart, XAxis, ResponsiveContainer, YAxis,Tooltip, Line, CartesianGrid} from 'recharts';
import "./Chart.css"

export default function Chart  ({title, data, dataKey, grid})  {
    
    return (
        <div className='chart'>
           <h2 className="chartTitle">
            User Analytics
           </h2>
           <ResponsiveContainer width="100%" aspect = {4 / 1}>
            <LineChart data={data} >
               
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        
         {grid && <CartesianGrid stroke='#e0dfdf'  strokeDasharray="5 5"/>}
         
          <Line type="monotone" dataKey="Active User" stroke="blue" />
            </LineChart>
             </ResponsiveContainer>
        </div>
    );
}

