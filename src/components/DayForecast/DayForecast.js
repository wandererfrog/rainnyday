import React from 'react'
import './DayForecast.css'

export default function DayForecast({data}){
    
    return (
        <div className="day-forecast-container">
            <div className="day-forecast-label">{data.name}</div>
            <div className="day-forecast-temp">{Math.round(data.avg)} &#8451;</div>
            <div className="day-forecast-prediction">
                <div className="day-forecast-prediction-temp">
                    <i className="lnr lnr-arrow-down min_temperature day-forecast-prediction-temp-icon"></i> 
                    <span className="day-forecast-prediction-temp-text">{Math.round(data.min)} &#176;</span>
                </div>
                <div className="day-forecast-prediction-temp">
                    <i className="lnr lnr-arrow-up max_temperature day-forecast-prediction-temp-icon"></i>
                    <span className="day-forecast-prediction-temp-text">{Math.round(data.max)} &#176;</span>
                </div>
            </div>
        </div>
    );
}