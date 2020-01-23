import React from 'react'
import PropTypes from 'prop-types';

import './WeatherIcon.css'

export default function WeatherIcon({iconId,description}){
    return (
        <div className="weather-container">
            <i className={`owf owf-${iconId} weather-icon`}></i>
            <div className="weather-description">{description}</div>
        </div>
    )
}

WeatherIcon.propTypes = {
    iconId : PropTypes.number.isRequired,
    description : PropTypes.string.isRequired,
};