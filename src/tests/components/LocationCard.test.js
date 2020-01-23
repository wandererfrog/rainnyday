import nock from 'nock'
import config from '../../config'
import React from 'react'
import { shallow } from 'enzyme';

import LocationCard from '../../components/LocationCard/LocationCard'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

test('Return null if no location is passed in props.',()=>{
    const wrapper = shallow(<LocationCard />);
    expect(wrapper.type()).toEqual(null)
})

test('Return LoadingSpinner if no location is passed in props.',()=>{
    nock(`${config.apiUrl}`)
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get('/v1/weather?')
        .reply(200, null)

    const wrapper = shallow(<LocationCard location={{ value : "lisbon", label : "Lisbon", id : 12341}} />);
    expect(wrapper.exists(LoadingSpinner)).toEqual(true);
})
