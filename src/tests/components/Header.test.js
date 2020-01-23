import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'

import Header from '../../components/Header/Header'

test('Header Component displays correctly.',()=>{
    const wrapper = shallow(<Header location="Lisbon" />);
    expect(wrapper.find('.header-location').text()).to.equal("Lisbon");
})