import React from 'react'

import chai, { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import rewire from 'rewire'
import { Link } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

import RoomItem from '../../../src/client/components/RoomItem'

describe('COMPONENT / <RoomItem />', () => {
  it('should render a Room item', () => {
    const wrapper = shallow(
      <RoomItem
        roomName='coucou'
        players={{}}
        hashName='fcwe'
        username='fifi'
        status='Starting'
        joinGame={() => {}}
      />
    )
    expect(wrapper.exists()).to.be.true
  })
  it('should render a Full Room item', () => {
    const wrapper = shallow(
      <RoomItem
        roomName='coucou'
        players={{}}
        hashName='fcwe'
        username='fifi'
        status='waiting'
        joinGame={hashname => {}}
      />
    )
    expect(wrapper.exists()).to.be.true
  })
  it('should click on button', () => {
    const wrapper = shallow(
      <RoomItem
        roomName='coucou'
        players={{}}
        hashName='fcwe'
        username='fifi'
        status='waiting'
        joinGame={hashname => {}}
      />
    )
    wrapper.find(Link).simulate('click')
  })
})
