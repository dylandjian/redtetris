import React from 'react'

import { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Header from '../../../src/client/components/Header'
import Logo from '../../../src/client/components/Logo'

Enzyme.configure({ adapter: new Adapter() })

describe('COMPONENT / <Header />', () => {
  it('should render', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.exists()).to.be.true
  })
  it('should render with roomname', () => {
    const wrapper = mount(<Header />)
    wrapper.setProps({ roomName: 'coucou' })
    expect(wrapper.find('.header__middle').find('.room-name').exists()).to.be
      .true
  })
  it('should contain <Logo />', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('.header__left').find(Logo).exists()).to.be.true
  })
})
