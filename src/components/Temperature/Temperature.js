import React from 'react'

export default function Temperature({temp,feelsLike}){

    return (
        <div className="temperature-container">
            {Math.round(temp)}<span>&#8451;</span>
            <div className="temperature-feels-like">Feels like {Math.round(feelsLike)}<span>&#8451;</span></div> 
        </div>      
    );
}