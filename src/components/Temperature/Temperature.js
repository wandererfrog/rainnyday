import React from 'react'

import './Temperature.css'

export default function Temperature({temp,feelsLike}){

    if(!temp || !feelsLike)
        return null

    return (
        <div className="temperature-container">
            <div className="temperature-value">{`${Math.round(temp)}`}&#176;</div>
            <div className="temperature-feels-like">{`Feels like ${Math.round(feelsLike)}`}&#8451;</div> 
        </div>      
    );
}