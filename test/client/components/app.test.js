import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import App from '../../../src/client/components/App'
import FinalNotificationList
  from '../../../src/client/containers/NotificationList'
import Panel from '../../../src/client/components/Panel'
import { Switch, Route } from 'react-router-dom'

describe('COMPONENT / <App />', () => {
  it('should contain <FinalNotificationList />', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(FinalNotificationList).exists()).to.equal(true)
  })
  it('should contain <Switch />', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Switch).exists()).to.equal(true)
  })
  it('<Switch /> should have 3 childrens', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Switch).children()).to.have.length(3)
  })
  it('<Switch /> should have Route to / path', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Switch).find(Route).first().prop('path')).to.equal('/')
  })
  it('<Switch /> should have Route to /lobby path', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Switch).find(Route).at(1).prop('path')).to.equal(
      '/lobby'
    )
  })
  it('<Switch /> should have Route to /:hashName path', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Switch).find(Route).at(2).prop('path')).to.equal(
      '/:hashName'
    )
  })
})
