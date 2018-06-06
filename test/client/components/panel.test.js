import React from 'react'

import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Panel from '../../../src/client/components/Panel'

Enzyme.configure({ adapter: new Adapter() })

describe('COMPONENT / <Panel />', () => {
  it("shouldn't have Panel has a child", () => {
    const wrapper = shallow(<Panel />)
    expect(wrapper.find(Panel)).to.have.length(0)
  })
})
