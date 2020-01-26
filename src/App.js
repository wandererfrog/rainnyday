import React from 'react';
import {Redirect,withRouter} from 'react-router-dom'
import Slider from "react-slick";

import LocationCard from './components/LocationCard/LocationCard'
import OptionsMenu from './components/OptionsMenu/OptionsMenu'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weatherId : null,
      locations : JSON.parse(window.localStorage.getItem("locations")) || []
    }
  }

  goTo(path){
    this.props.history.push(`/${path}`);
  }

  render(){
    const {locations} = this.state

    const options = [
      { label : "Add Location" , callback : this.goTo.bind(this,'new')},
      { label : "About" , callback : this.goTo.bind(this,'about')}
    ]

    if(locations.length === 0)
      return <Redirect to="/new" />
    
    return (
      <div className="App background-gradient container">
        <Slider arrows={false} swipeToSlide >
          {
            locations
              .map((local,idx) => <LocationCard location={local} key={idx} /> )
          }
        </Slider>
        <OptionsMenu options={options} />
      </div>
    );
  }
}

export default withRouter(App);