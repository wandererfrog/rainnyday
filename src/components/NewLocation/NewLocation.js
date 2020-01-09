import React, { useState }  from 'react'
import axios from 'axios'

import Select from 'react-select'

const data = require('../../data/city.list.json');

export default class NewLocation extends React.Component{
    constructor(props){
        super(props)   
        this.state = {
            locations : [],
            cityName : ""
        }
    }

    componentDidMount(){
        
    }

    /**
     * Set City Name
     */
    setCityName(e){
        const {locations} = this.state
        const cities = (locations.length === 0 ) ? data : locations;
        this.setState({
            cityName : e.target.value,
            // Call NODE API
            // locations : (e.target.value.length < 2) ? [] : cities
            //         .filter( city => {
            //             var pattern = e.target.value.split("").map((x)=>{
            //                 return `(?=.*${x})`
            //             }).join("");    var regex = new RegExp(`${pattern}`, "g")    
            //             return city.name.match(regex);
            //         }).slice(0,40).map((city)=>( { value : city.name , label : city.name }))
        })
    }

    /**
     * Add new Location
     */

    addLocation(cityName){
        if(cityName.length < 3)
            return;

        const {locations} = this.state    
        //Add new location
        locations.push(cityName)

        this.setState({
            locations : locations
        },()=>{
            window.localStorage.setItem("locations",JSON.stringify(locations))
        })
    }

    render(){
        const {locations,cityName} = this.state
        console.log(locations)
        return (
            <div >
                <Select options={locations} onKeyDown={this.setCityName.bind(this)} isClearable ignoreAccents={false}/>
                <button onClick={() => this.addLocation(cityName)}>Add</button>
            </div>
        )
    }
}