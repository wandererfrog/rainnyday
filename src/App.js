import React from 'react';
import {Redirect} from 'react-router-dom'
import Slider from "react-slick";

import LocationCard from './components/LocationCard/LocationCard'
import AddLocation from './components/AddLocation/AddLocation'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weatherId : null,
      locations : JSON.parse(window.localStorage.getItem("locations")) || []
    }
  }

  render(){
    const {locations} = this.state

    if(locations.length === 0)
      return <Redirect to="/new" />
    
    return (
      <div className="App background-gradient container">
        <Slider arrows={false} swipeToSlide >
          {
            locations
              .map((local,idx) => <LocationCard location={local} key={idx} /> )
          }
          <AddLocation />
        </Slider>
      </div>
    );
  }
}

export default App;
