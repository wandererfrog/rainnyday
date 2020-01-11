import React from 'react'
import axios from 'axios'
import Select from 'react-select'

import config from '../../config'



export default class NewLocation extends React.Component{
    constructor(props){
        super(props)   
        this.state = {
            locations : JSON.parse(window.localStorage.getItem("locations")),
            cityName : "",
            cities : [],
            selectedCity : null
        }
    }

    /**
     * Set City Name
     */
    setCityName(e){
        const cityName = e.target.value

        window.fetch(`${config.apiUrl}/v1/search?city=${cityName}`)
        .then(response => {
            if(response.status !== 200)
                return
            
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            this.setState({
                cityName : cityName,
                cities : data
            },()=>{
                console.log(this.state);
                
            })
        }).catch(err => console.log(err));
    }

    onChange(value){
        console.log(value);
        this.setState({
            selectedCity : value
        })
    }

    /**
     * Add new Location
     */

    addLocation(){
        const {selectedCity} = this.state

        const {locations} = this.state    
        //Add new location
        locations.push(selectedCity)
        console.log("Adding!");
        
        this.setState({
            locations : locations
        },()=>{
            window.localStorage.setItem("locations",JSON.stringify(locations))
        })
    }

    render(){
        const {cities} = this.state
        
        return (
            <div >
                <Select options={cities} onKeyDown={this.setCityName.bind(this)} isClearable ignoreAccents={false} onChange={this.onChange.bind(this)} />
                <button onClick={() => this.addLocation()}>Add</button>
            </div>
        )
    }
}