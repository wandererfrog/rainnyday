import React from 'react'
import {XAxis,YAxis,Area,AreaChart,ResponsiveContainer} from 'recharts'

import './TemperatureGraph.css'

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
        <ResponsiveContainer width="95%" height={220}>
            <AreaChart data={temps}
                margin={{top: 5, right: 0, left: -30, bottom: 5}}>
                <XAxis dataKey="label" fontSize={10} />
                <YAxis fontSize={10}/>
                <Area type="monotone" dataKey="value" stroke="#f9f9f9" fill="#373f48" />
            </AreaChart>
        </ResponsiveContainer>
    );
}