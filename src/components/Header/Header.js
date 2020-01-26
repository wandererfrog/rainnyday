import React from 'react'
import './Header.css'

export default function({location}){
    const date = new Date();

    return ( 
        <div className="header-container">
            <div className="header-location">
                {location}
            </div>
            <div className="header-time">
                {`${(date.getHours() < 10) ? "0"+date.getHours() : date.getHours() }:${ (date.getMinutes() < 10) ? "0"+date.getMinutes() : date.getMinutes()}`}
            </div>
            <div className="header-date">
                {`${date.getFullYear()}-${ (date.getMonth()+1 < 10) ? "0"+(date.getMonth()+1) : date.getMonth()+1 }-${(date.getDate() < 10) ? date.getDate() : date.getDate() }`}  
            </div>
        </div>
    )
}