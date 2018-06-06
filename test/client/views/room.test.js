import React from 'react'
import chai, { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Redirect } from 'react-router'

Enzyme.configure({ adapter: new Adapter() })

import Room from '../../../src/client/views/Room'
import FinalRoom from '../../../src/client/containers/Room'
import FinalHeader from '../../../src/client/containers/Header'
import Game from '../../../src/client/views/Game'

describe('VIEW / <Room />', () => {
  it('should exist', () => {
    const wrapper = shallow(<Room />)
    expect(wrapper.exists()).to.equal(true)
  })
  it('should have a container component <Redirect /> when username empty', () => {
    const wrapper = shallow(<Room username='' />)
    expect(wrapper.find(Redirect).exists()).to.equal(true)
    expect(wrapper.find(Redirect).prop('to')).to.equal('/')
  })
  it('should have a container component <Redirect /> when currentGame doesnt exist', () => {
    const wrapper = shallow(<Room username='fifi' />)
    expect(wrapper.find(Redirect).exists()).to.equal(true)
    expect(wrapper.find(Redirect).prop('to')).to.equal('/lobby')
  })
  it('should have a container component <Game /> when gameStatus == In game', () => {
    const wrapper = shallow(
      <Room username='fifi' currentGame={{}} gameStatus='In game' />
    )
    expect(wrapper.find(FinalHeader).exists()).to.equal(true)
    expect(wrapper.find(Game).exists()).to.equal(true)
  })
  it('should have a container component <Room /> when gameStatus != In game', () => {
    const wrapper = shallow(
      <Room username='fifi' currentGame={{}} gameStatus='' />
    )
    expect(wrapper.find(FinalHeader).exists()).to.equal(true)
    expect(wrapper.find(FinalRoom).exists()).to.equal(true)
  })
})
