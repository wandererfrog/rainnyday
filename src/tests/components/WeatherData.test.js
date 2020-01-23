import React from 'react'
import { shallow } from 'enzyme';
import {expect} from 'chai'

import WeatherData from '../../components/WeatherData/WeatherData'

test('Return null if no data is passed in props.',()=>{
    const wrapper = shallow(<WeatherData />);
    expect(wrapper.find('.weather-data-field')).to.have.lengthOf(0)
})

test('Render correct number of data fields.',()=>{
    const wrapper = shallow(<WeatherData humidity={12} wind={32} />);
    expect(wrapper.find('.weather-data-field')).to.have.lengthOf(2)
})

test('Render correct number of data fields.',()=>{
    const wrapper = shallow(<WeatherData humidity={12} wind={32} rain={23} snow={43}/>);
    expect(wrapper.find('.weather-data-field')).to.have.lengthOf(4)
})