import React,{useState} from 'react'
import { getCurrentWeatherData } from '../../services/Api'

function LocationCard({location}){
    const [data,setData] = useState(null)
   
    if(!data){
        getCurrentWeatherData({
            q : location.value,
            units : 'metric'
        }).then((resp)=> {
            console.log(resp)
            setData(resp)
            console.log(data)
        })
    }
    
    if(!data)
        return <h6>Loading</h6>

    return (
        <div className="location-card">
            {location.label}
            <i className={`owf owf-${data.weather[0].id}`}></i>
            {Math.round(parseFloat(data.main.temp))}
            <ion-icon name="heart"></ion-icon>
        </div>
    )
}

export default LocationCard