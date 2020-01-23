import React from 'react'
import './WeatherData.css'

export default function WeatherData({humidity,wind,rain,snow}){
    
    return (
        <div className="weather-data-container">
            {
                (!humidity) ? null :
                <div className="weather-data-field">
                    <img className="weather-data-field-icon" src={require('../../assets/humidity_icon.png')} />
                    <span className="weather-data-field-text">{`${humidity} %`}</span>
                </div>
            }

            {
                (!wind) ? null :
                <div className="weather-data-field">
                    <img className="weather-data-field-icon" src={require('../../assets/wind_icon.png')} />
                    <span className="weather-data-field-text">{`${wind.speed} m/s`}</span>
                </div> 
            }

            {
                (!rain) ? null : 
                <div className="weather-data-field">
                    <img className="weather-data-field-icon" src={require('../../assets/rain_icon.png')} />
                    <span className="weather-data-field-text">{`${rain['3h']} mm`}</span>
                </div>
            }

            {
                (!snow) ? null : 
                <div className="weather-data-field">
                    <img className="weather-data-field-icon" src={require('../../assets/snow_icon.png')} />
                    <span className="weather-data-field-text">{`${snow['3h']} mm`}</span>
                </div>
            }
        </div>
    );
}