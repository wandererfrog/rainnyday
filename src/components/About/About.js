import React from 'react'
import {withRouter} from 'react-router-dom'
import './About.css'

function About({history}){
    return (
        <div className="about-container container">
            <div className="about-title">About</div>
            <div className="about-text">
                Rainyday is a simple opensource weather app. It's purpose is for showcasing.

            </div>
            <button className="close-btn" onClick={()=>{history.goBack()}}>
                <i className="options-menu-button lnr lnr-cross"></i>
            </button>
        </div>
    )
}

export default withRouter(About);