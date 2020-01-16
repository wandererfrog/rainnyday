import React,{useState} from 'react'
import { getWeatherData } from '../../services/Api'
import ScaleLoader from 'react-spinners/ScaleLoader'

import Header from '../Header/Header'
import Temperature from '../Temperature/Temperature'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import WeatherData from '../WeatherData/WeatherData'
import DayForecast from '../DayForecast/DayForecast'
import TemperatureGraph from '../TemperatureGraph/TemperatureGraph'

function LocationCard({location}){
    const [data,setData] = useState(null)
    const [fetchedData,setFetchedData] = useState(false)

    if(!location){
        return null;
    }

    if(!data && !fetchedData){
        getWeatherData({
            q : location.value,
            id : location.id,
            units : 'metric'
        }).then((resp)=> {
            setData(resp)
            console.log("Response:"+resp);
        })

        setFetchedData(true)
    }
    
    if(!data)
        return (
            <span className="loading-spinner"><ScaleLoader size={42} loading color={"#429dac"}/></span>
        )
        
    return (
        <div className="location-card">
            <Header location={location.label} />
            <div className="row">
                <div className="col-6-sm">
                    <Temperature temp={data.current.main.temp} feelsLike={data.current.main['feels_like']} />
                </div>
                <div className="col-6-sm">
                    <WeatherIcon iconId={data.current.weather[0].id} description={data.current.weather[0].description}/>
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    <WeatherData wind={data.current.wind} humidity={data.current.main.humidity} rain={data.current.rain} snow={data.current.snow} />
                </div>
            </div>
           <div className="row">
                <div className="col-12">
                    <TemperatureGraph data={(!data.graph) ? null : data.graph} />
                </div>
            </div>
            
            <div className="row">
                {
                    (!data.forecast) ? null : Object.keys(data.forecast).map((day,idx) => (
                        <DayForecast key={idx} data={data.forecast[day]} />
                    ))
                }
                <div className="col-4">

                </div> 
            </div>
        </div>
    )
}

export default LocationCard