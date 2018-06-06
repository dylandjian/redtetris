import React from 'react'

import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Logo from '../../../src/client/components/Logo'

Enzyme.configure({ adapter: new Adapter() })

describe('COMPONENT / <Logo />', () => {
  it("shouldn't have Panel has a child", () => {
    const wrapper = shallow(<Logo />)
    expect(wrapper.find('.logo--red').exists()).to.be.true
  })
})
