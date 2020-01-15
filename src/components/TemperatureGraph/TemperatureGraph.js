import React from 'react'

import {LineChart,XAxis,YAxis,Line,Tooltip} from 'recharts'

export default function TemperatureGraph({data}){
        console.log(data)
    if(!data)
        return null;

    const temps = data.list.slice(0,8).map((temp)=>{
        //let date = new Date(temp.dt)
        let label = temp['dt_txt'].split(" ")[1];
        label = label.substring(0,5);
        return { 
            //label : `${date.getHours()}:${date.getMinutes()}`, 
            label : label,
            value : temp.main.temp 
        }
    })


    return (
        <LineChart width={600} height={300} data={temps}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="label"/>
            <YAxis/>
            <Line type="monotone"  dataKey="value" stroke="#8884d8" dot={false}/>
        </LineChart>
    );
}