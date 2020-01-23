import React from 'react'
import { shallow } from 'enzyme';
import {expect} from 'chai'

import Temperature from '../../components/Temperature/Temperature'

test('Return null if no data is passed in props.',()=>{
    const wrapper = shallow(<Temperature />);
    expect(wrapper.exists(<Temperature />)).to.equal(false)
})

test('Displays correctly when correct props are passed.',()=>{
    const wrapper = shallow(<Temperature temp={12} feelsLike={10} /> )
    const temp = `${Math.round(12)}°`

    expect(wrapper.find('.temperature-value').text()).to.equal(temp)
})

test('Displays correctly when correct props are passed.',()=>{
    const wrapper = shallow(<Temperature temp={12} feelsLike={10} /> )
    const feelsLike = `Feels like ${Math.round(10)}℃`

    expect(wrapper.find('.temperature-feels-like').text()).to.equal(feelsLike)
})
