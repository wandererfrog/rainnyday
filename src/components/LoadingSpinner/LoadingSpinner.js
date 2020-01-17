import React from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'

function LoadingSpinner({className}){

    let classNames = (className) ? className : "loading-spinner";  

    return (
        <div className={`${classNames}`}><ScaleLoader size={42} loading color={"#429dac"}/></div>
    )
}

export default LoadingSpinner;