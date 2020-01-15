import React from 'react'
import Select from 'react-select'

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
        const {history} = this.props

        const {locations} = this.state    
        //Add new location
        locations.push(selectedCity)
        
        this.setState({
            locations : locations
        },()=>{
            window.localStorage.setItem("locations",JSON.stringify(locations))
            history.push('/')
        })
    }

    render(){
        const {cities} = this.state
        
        return (
            <div className="new-container container">
                <div className="new-inner-container">
                    <Select options={cities} onKeyDown={this.setCityName.bind(this)} isClearable ignoreAccents={false} onChange={this.onChange.bind(this)} />
                    <button className="rn-btn rn-btn-add" onClick={() => this.addLocation()}>Add +</button>
                    <br />or<br />
                    <button className="rn-btn rn-btn-getpos" onClick={null}>Get position</button>
                </div>
            </div>
        )
    }
}

export default withRouter(NewLocation)