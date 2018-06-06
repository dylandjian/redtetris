import React from 'react'
import chai, { expect } from 'chai'
import chaiRedux from 'chai-redux'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import omit from 'lodash/omit'
import rewire from 'rewire'
import { Provider } from 'react-redux'
import { Redirect } from 'react-router'

chai.use(chaiRedux)
Enzyme.configure({ adapter: new Adapter() })

import CreateRoomInput from '../../../src/client/components/CreateRoomInput'
import reducers from '../../../src/client/reducers'

const createroominput = rewire(
  '../../../src/client/components/CreateRoomInput/index.jsx'
)
const verifyRoomName = createroominput.__get__('verifyRoomName')
const handleKeyDown = createroominput.__get__('handleKeyDown')

describe('COMPONENT / <CreateRoomInput />', () => {
  it('shoult mount', () => {
    const wrapper = shallow(<CreateRoomInput />)
    expect(wrapper.exists()).to.equal(true)
  })
  it('should press enter on input', () => {
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger]
    })
    const wrapper = mount(
      <Provider store={store}>
        <CreateRoomInput addError={() => {}} />
      </Provider>
    )
    wrapper
      .find('.input--text')
      .simulate('change', { target: { value: 'fifi' } })
    wrapper.find('.button').simulate('click')
  })
  it('should trigger handleKeyDown', () => {
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger]
    })
    const wrapper = mount(
      <Provider store={store}>
        <CreateRoomInput addError={() => {}} />
      </Provider>
    )
    wrapper
      .find('.input--text')
      .simulate('change', { target: { value: 'fifi' } })
    wrapper.find('.input--text').simulate('keyDown', { key: 'Enter' })
  })

  it('verifyRoomName() should return true when roomname is empty', () => {
    expect(verifyRoomName('')).to.be.equal(false)
  })
  it('verifyRoomName() should return true when roomname == jeanjeanjeanjeanjeanjean', () => {
    expect(verifyRoomName('jeanjeanjeanjeanjeanjean')).to.be.equal(false)
  })
  it('verifyRoomName() should return false when roomname == fifiblop', () => {
    expect(verifyRoomName('fifiblop')).to.be.equal(true)
  })
})
