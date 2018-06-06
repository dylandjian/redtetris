import React from 'react'
import chai, { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Redirect } from 'react-router'

Enzyme.configure({ adapter: new Adapter() })

import Lobby from '../../../src/client/views/Lobby'
import FinalCreateRoomWrapper
  from '../../../src/client/containers/CreateRoomWrapper'
import FinalRoomList from '../../../src/client/containers/RoomList'
import FinalHeader from '../../../src/client/containers/Header'

describe('VIEW / <Lobby />', () => {
  it('should exist', () => {
    const wrapper = shallow(<Lobby username='fifi' />)
    expect(wrapper.exists()).to.equal(true)
  })
  it('should have a container component <Redirect /> when username empty', () => {
    const wrapper = shallow(<Lobby username='' />)
    expect(wrapper.find(Redirect).exists()).to.equal(true)
    expect(wrapper.find(Redirect).prop('to')).to.equal('/')
  })
  it('should have a container component <Header /> when username exist', () => {
    const wrapper = shallow(<Lobby username='fifi' />)
    expect(wrapper.find(FinalHeader).exists()).to.equal(true)
  })
  it('should have a container component <CreateRoomWrapper /> when username exist', () => {
    const wrapper = shallow(<Lobby username='fifi' />)
    expect(wrapper.find(FinalCreateRoomWrapper).exists()).to.equal(true)
  })
  it('should have a container component <RoomList /> when username exist', () => {
    const wrapper = shallow(<Lobby username='fifi' />)
    expect(wrapper.find(FinalRoomList).exists()).to.equal(true)
  })
})
