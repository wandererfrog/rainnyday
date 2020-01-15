import React from 'react'

export default function DayForecast({data}){
    console.log(data)    
    
    
    return (
        <div className="day-forecast-container">
            <div className="day-forecast-label">{data.name}</div>
            <div className="day-forecast-temp">{Math.round(data.avg)}</div>
            <div className="day-forecast-prediction">
                <div className="day-forecast-prediction-temp">
                    <i className="lnr lnr-arrow-down"></i> 
                    <span>{Math.round(data.min)}</span>
                </div>
                <div className="day-forecast-prediction-temp">
                    <i className="lnr lnr-arrow-up"></i>
                    <span>{Math.round(data.max)}</span>
                </div>
            </div>
        </div>
    );
}