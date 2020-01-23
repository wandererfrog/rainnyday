import React from 'react'
import { shallow } from 'enzyme';
import {expect} from 'chai'

import WeatherIcon from '../../components/WeatherIcon/WeatherIcon'

test('Render WeatherIcon description correctly.',()=>{
    const wrapper = shallow(<WeatherIcon description="Description mock" iconId={1234} />);
    expect(wrapper.find('.weather-description').text()).to.equal("Description mock");
})

test('Render WeatherIcon icon correctly.',()=>{
    const wrapper = shallow(<WeatherIcon description="Description mock" iconId={1234} />);
    expect(wrapper.find('.weather-icon').hasClass('owf-1234')).to.equal(true);
})