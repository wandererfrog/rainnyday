import React from 'react'

import {LineChart,XAxis,YAxis,Line,Area,AreaChart} from 'recharts'

export default function TemperatureGraph({data}){

    if(!data)
        return null;

    const temps = data.map((temp)=>{
        let label = temp['dt_txt'].split(" ")[1];
        label = label.substring(0,5);
        return {
            label : label,
            value : temp.main.temp 
        }
    })


    return (
        <AreaChart width={600} height={300} data={temps}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="label"/>
            <YAxis/>
            {/* <Line type="monotone"  dataKey="value" stroke="#8884d8" dot={false}/> */}
            <Area type="monotone" dataKey="value" stroke="#f9f9f9" fill="#373f48" />
        </AreaChart>
    );
}