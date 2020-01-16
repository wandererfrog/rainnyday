import React from 'react'
import './WeatherData.css'

export default function WeatherData({humidity,wind,rain,snow}){
    
    return (
        <div className="weather-data-container">
            <div className="weather-data-field">
                <img className="weather-data-field-icon" src={require('../../assets/humidity_icon.png')} />
                <span className="weather-data-field-text">{`${humidity} %`}</span>
            </div>
            <div className="weather-data-field">
                <img className="weather-data-field-icon" src={require('../../assets/wind_icon.png')} />
                <span className="weather-data-field-text">{`${wind.speed} m/s`}</span>
            </div>

            {
                (!rain) ? null : 
                <div className="weather-data-field">
                    <img className="weather-data-field-icon" src={require('../../assets/rain_icon.png')} />
                    <span className="weather-data-field-text">{`${rain['1h']} mm`}</span>
                </div>
            }

            {
                (!snow) ? null : 
                <div className="weather-data-field">
                    <img className="weather-data-field-icon" src={require('../../assets/snow_icon.png')} />
                    <span className="weather-data-field-text">{`${snow['1h']} mm`}</span>
                </div>
            }
        </div>
    );
}