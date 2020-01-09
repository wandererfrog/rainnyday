import axios from 'axios'
import config from '../config'

export function getWeatherByCoords(latitude,longitude){
    if(!latitude || !longitude){
        return;
    }

    axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          latitude: latitude,
          longitude : longitude,
          APPID : config.weatherApiKey 
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
}


export function getWeatherByCityId(cityId){
    if(!cityId){
        return;
    }

    axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          id: cityId,
          APPID : config.weatherApiKey 
        }
      })
      .then(function (response) {
        console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
      })
}

export function getWeatherByCityName(cityName){
    if(!cityName){
        return;
    }
    
    return axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: cityName,
          APPID : config.weatherApiKey 
        }
      })
      .then(function (response) {
          console.log(response);
          return response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
}