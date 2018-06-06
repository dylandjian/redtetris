import React from 'react'

import chai, { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import Game from '../../../src/client/views/Game'
import FinalBoard from '../../../src/client/containers/Board'
import FinalShadow from '../../../src/client/containers/Shadow'
import FinalHud from '../../../src/client/containers/Hud'

describe('VIEW / <Game />', () => {
  it('should exist', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.hasClass('game-view')).to.equal(true)
  })
  it('should have a container component <Board /> ', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.find(FinalBoard).exists()).to.equal(true)
  })
  it('should have a container component <Shadow /> ', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.find(FinalShadow).exists()).to.equal(true)
  })
  it('should have a container component <Hud /> ', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.find(FinalHud).exists()).to.equal(true)
  })
})
