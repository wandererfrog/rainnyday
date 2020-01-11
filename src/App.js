import React from 'react';
import {Redirect,withRouter} from 'react-router-dom'
import Slider from "react-slick";

import LocationCard from './components/LocationCard/LocationCard'
import NewLocation from './components/NewLocation/NewLocation'

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weatherId : null,
      locations : JSON.parse(window.localStorage.getItem("locations")) || []
    }
  }

  componentDidMount(){
  }

  render(){
    const {locations} = this.state
    const {history} = this.props

    if(locations.length === 0)
      return <Redirect to="/new" />
 
    return (
      <div className="App background-gradient">
        <Slider >
          {
            locations.map((local,idx) => <LocationCard location={local} key={idx} /> )
          }
          <NewLocation />
        </Slider>
        <button onClick={() => history.replace('new') }>Add new</button>
        <span style={{color : "red"}} className="lnr lnr-question-circle"></span>
      </div>
    );
  }
}

export default withRouter(App);
