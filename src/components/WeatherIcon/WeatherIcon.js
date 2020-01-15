import React from 'react'

export default function WeatherIcon({iconId,description}){
    return (
        <div className="temperature-description">
            <i className={`owf owf-${iconId} weather-icon`}></i>;
            {description}
        </div>
    )
}