import config from '../config'

export function getCurrentWeatherData(params){
    if(!params)
        return;

    let qs = ""    
    for (let i = 0; i < Object.keys(params).length; i++) {
        qs += Object.keys(params)[i]+"="+params[Object.keys(params)[i]]+"&";
    }

    return window.fetch(`${config.apiUrl}/v1/weather?${qs}`)
        .then(response => {
            if(response.status !== 200)
                return
            
            return response.json()
        })
        .then((data)=>{
            console.log(data);
            return data;
        })
}