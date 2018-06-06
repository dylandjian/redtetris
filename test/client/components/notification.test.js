import React from 'react'

import chai, { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import rewire from 'rewire'

Enzyme.configure({ adapter: new Adapter() })

import Notification from '../../../src/client/components/Notification'
const notification = rewire(
  '../../../src/client/components/Notification/index.jsx'
)
const waitThenClose = notification.__get__('waitThenClose')

describe('COMPONENT / <Notification />', () => {
  it('should render', () => {
    const wrapper = shallow(<Notification />)
    expect(wrapper.exists()).to.be.true
  })
  it('should render', () => {
    const wrapper = shallow(<Notification deleteNotification={() => {}} />)
    wrapper
      .find('.notification__button-container')
      .find('.button--close')
      .simulate('click')
  })
  it('should delete notification after choosen time', () => {
    waitThenClose(id => {}, 12, 1000)
  })
})
