import React from 'react'
import './WeatherIcon.css'

export default function WeatherIcon({iconId,description}){
    return (
        <div className="weather-container">
            <i className={`owf owf-${iconId} weather-icon`}></i>
            <div className="weather-description">{description}</div>
        </div>
    )
}