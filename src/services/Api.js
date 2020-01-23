import config from '../config'

export function getWeatherData(params){
    if(!params)
        return null;

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

export function formatParams(params){
    if(!params)
        return "";

    let qs = ""    
    for (let i = 0; i < Object.keys(params).length; i++) {
        qs += Object.keys(params)[i]+"="+params[Object.keys(params)[i]]+"&";
    }
    
    if(qs.charAt(qs.length-1) === "&"){
        qs = qs.substring(0,qs.length-1);
    }

    return qs;
}