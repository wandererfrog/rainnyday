import React from 'react'

export default function({location}){
    const date = new Date();

    return ( 
        <div className="header-container">
            <div className="header-location">
                {location}
            </div>
            <div className="header-time">
                {`${date.getHours()}:${date.getMinutes()}`}
            </div>
            <div className="header-date">
                {`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}
            </div>
        </div>
    )
}