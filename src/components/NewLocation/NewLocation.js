import React from 'react'
import Select from 'react-select'

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import config from '../../config'
import './NewLocation.css'
import { withRouter } from 'react-router-dom'

class NewLocation extends React.Component{
    constructor(props){
        super(props)   
        this.state = {
            locations : JSON.parse(window.localStorage.getItem("locations")) || [],
            cityName : "",
            cities : [],
            selectedCity : null,
            loading : false
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
            this.setState({
                cityName : cityName,
                cities : data
            })
        }).catch(err => console.log(err));
    }

    onChange(value){
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
        this.updateLocationStore(locations)    
    }

    updateLocationStore(locations){
        const {history} = this.props
        
        this.setState({
            locations : locations
        },()=>{
            console.log(locations)
            window.localStorage.setItem("locations",JSON.stringify(locations))
            history.push('/')
        })
    }

    addCurrentPosition(){
        const {locations} = this.state   

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
        
        this.setState({
            loading : true
        })

        navigator.geolocation
            .getCurrentPosition((pos)=>{
                locations.push({
                    label : "Current",
                    value : "current",
                    coords : {
                        lat : pos.coords.latitude,
                        long : pos.coords.longitude
                    }
                })
                this.updateLocationStore(locations)
            },(err)=>{
                console.log(err)
                return null;
            },options);
    }

    render(){
        const {cities,loading} = this.state
        
        return (
            <div className="new-container container">
                <div className="new-inner-container">
                    <Select options={cities} onKeyDown={this.setCityName.bind(this)} isClearable ignoreAccents={false} onChange={this.onChange.bind(this)} />
                    <button className="rn-btn rn-btn-add" onClick={() => this.addLocation()}>Add +</button>
                    <br />or<br />
                    <button className="rn-btn rn-btn-getpos" onClick={()=> this.addCurrentPosition()}>
                        {
                            (loading) ? <LoadingSpinner className="cat"/> : "Get position"
                        } 
                        
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(NewLocation)