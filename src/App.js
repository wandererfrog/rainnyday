import React from 'react';
import {Redirect,withRouter} from 'react-router-dom'

import LocationCard from './components/LocationCard/LocationCard'
import {getWeatherByCityName} from './services/OpenWeatherAPI'

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weatherId : null,
      locations : JSON.parse(window.localStorage.getItem("locations")) || []
    }
  }

  async getCurrentPosition(){
    // navigator.geolocation.getCurrentPosition((data)=>{console.log(data); }, ()=>{console.log("Error")});
    const data = await getWeatherByCityName("Lisbon")
    this.setState({
      weatherId : data.weather[0].id
    })
  }

  render(){
    const {locations} = this.state
    const {history} = this.props
    console.log(locations)
    if(locations.length === 0)
      return <Redirect to="/new" />

    return (
      <div className="App background-gradient">
        {
          locations.map((local,idx) => <LocationCard location={local} key={idx} /> )
        }
        <button onClick={this.getCurrentPosition.bind(this)}>Get location</button>
        {(this.state.weatherId) ? <i className={`owf owf-${this.state.weatherId}`}></i> : null } 
        <button onClick={() => history.replace('new') }>Add new</button>
      </div>
    );
  }
}

export default withRouter(App);
