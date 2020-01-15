import config from '../config'

export function getCurrentWeatherData(params){
    if(!params)
        return;

    let qs = formatParams(params)

    return window.fetch(`${config.apiUrl}/v1/weather?${qs}`)
        .then(response => {
            if(response.status !== 200)
                return
            
            return response.json()
        })
        .then((data)=>{
            return data;
        })
}

export function getWeatherForecast(params){
    if(!params)
        return;

   let qs = formatParams(params);

    return window.fetch(`${config.apiUrl}/v1/forecast?${qs}`)
        .then(response => {
            if(response.status !== 200)
                return
            
            return response.json()
        })
        .then((data)=>{
            return data;
        })
}

function formatParams(params){
    if(!params)
        return "";

    let qs = ""    
    for (let i = 0; i < Object.keys(params).length; i++) {
        qs += Object.keys(params)[i]+"="+params[Object.keys(params)[i]]+"&";
    }
    return qs;
}