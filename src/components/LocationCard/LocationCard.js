import React,{useState} from 'react'
import { getCurrentWeatherData , getWeatherForecast } from '../../services/Api'

import Header from '../Header/Header'
import Temperature from '../Temperature/Temperature'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import WeatherData from '../WeatherData/WeatherData'
import DayForecast from '../DayForecast/DayForecast'
import TemperatureGraph from '../TemperatureGraph/TemperatureGraph'

function LocationCard({location}){
    const [data,setData] = useState(null)
    const [forecastData,setForecastData] = useState(null)

    if(!location){
        return null;
    }
   
    if(!data){
        getCurrentWeatherData({
            q : location.value,
            units : 'metric'
        }).then((resp)=> {
            setData(resp)
        })

        getWeatherForecast({
            id : location.id,
            units : 'metric'
        }).then((resp)=> {
            setForecastData(resp)
        })

    }
    
    if(!data)
        return <h6>Loading</h6>
        
    return (
        <div className="location-card">
            <Header location={location.label} />
            <div className="row">
                <div className="col-8">
                    <Temperature temp={data.main.temp} feelsLike={data.main['feels_like']} />
                </div>
                <div className="col-8">
                    <WeatherIcon iconId={data.weather[0].id} description={data.weather[0].description}/>
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    <WeatherData wind={data.wind} humidity={data.main.humidity} rain={data.rain} snow={data.snow} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <TemperatureGraph data={(!forecastData) ? null : forecastData} />
                </div>
            </div>
            <div className="row">
                {
                    (!forecastData) ? null : forecastData.list.map((day) => (
                        <DayForecast data={day}/>
                    ))
                }
                <div className="col-4">

                </div>
            </div>
        </div>
    )
}

export default LocationCard