import React from 'react'

import chai, { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import Connection from '../../../src/client/views/Connection'
import FinalConnection from '../../../src/client/containers/Connection'

describe('VIEW / <Connection />', () => {
  it('should exist', () => {
    const wrapper = shallow(<Connection />)
    expect(wrapper.exists()).to.equal(true)
  })
  it('should have a bloc child', () => {
    const wrapper = shallow(<Connection />)
    expect(wrapper.find('.bloc').exists()).to.equal(true)
  })
  it('should have a logo', () => {
    const wrapper = shallow(<Connection />)
    expect(wrapper.find('.bloc').find('.logo').exists()).to.equal(true)
  })
  it('should have a container component <Connection /> ', () => {
    const wrapper = shallow(<Connection />)
    expect(wrapper.find(FinalConnection).exists()).to.equal(true)
  })
})
