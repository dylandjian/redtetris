import React from 'react'
import chai from 'chai'
import { expect } from 'chai'
import chaiRedux from 'chai-redux'
import * as Enzyme from 'enzyme'
import { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import omit from 'lodash/omit'
import rewire from 'rewire'
import { Provider } from 'react-redux'
import { Redirect } from 'react-router'
import sinon from 'sinon'

chai.use(chaiRedux)
Enzyme.configure({ adapter: new Adapter() })

import Connection from '../../../src/client/components/Connection'
import FinalConnection from '../../../src/client/containers/Connection'
import reducers from '../../../src/client/reducers'
import { addError } from '../../../src/client/actions/user'

const connection = rewire('../../../src/client/components/Connection/index.jsx')
const verifyUsername = connection.__get__('verifyUsername')

describe('COMPONENT / <Connection />', () => {
  it('should contain Redirect has child if username', () => {
    const wrapper = shallow(<Connection username='fifi' />)
    expect(wrapper.find(Redirect).exists()).to.equal(true)
    expect(wrapper.find(Redirect).prop('to')).to.equal('/lobby')
  })
  it('should contain input has child if no username', () => {
    const wrapper = shallow(<Connection username='' />)
    expect(wrapper.find('.connection-input').exists()).to.equal(true)
    expect(
      wrapper.find('.connection-input').find('.input--text').exists()
    ).to.equal(true)
  })
  it('should validate on Enter', () => {
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger]
    })
    const wrapper = mount(
      <Provider store={store}>
        <FinalConnection />
      </Provider>
    )
    wrapper
      .find('.connection-input')
      .find('.input-btn-grp')
      .find('.input--text')
      .simulate('change', { target: { value: 'fifi' } })
    wrapper
      .find('.connection-input')
      .find('.input-btn-grp')
      .find('.button')
      .simulate('click')
  })
  it('shouldnt validate on Enter with blank username', () => {
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger]
    })
    const wrapper = mount(
      <Provider store={store}>
        <FinalConnection />
      </Provider>
    )
    wrapper
      .find('.connection-input')
      .find('.input-btn-grp')
      .find('.input--text')
      .simulate('change', { target: { value: '' } })
    wrapper
      .find('.connection-input')
      .find('.input-btn-grp')
      .find('.button')
      .simulate('click')
  })
  it('should validate on Enter with good username', () => {
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger]
    })
    const wrapper = mount(
      <Provider store={store}>
        <FinalConnection />
      </Provider>
    )
    wrapper
      .find('.connection-input')
      .find('.input-btn-grp')
      .find('.input--text')
      .simulate('change', { target: { value: 'fifi' } })
    wrapper
      .find('.connection-input')
      .find('.input-btn-grp')
      .find('.button')
      .simulate('click')
  })
  it('should trigger Enter on input', () => {
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger]
    })
    const wrapper = mount(
      <Provider store={store}>
        <FinalConnection />
      </Provider>
    )
    const input = wrapper
      .find('.connection-input')
      .find('.input-btn-grp')
      .find('.input--text')
  })
  it('should display error', () => {
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger]
    })
    store.dispatch(addError(true))
    const wrapper = shallow(
      <Provider store={store}>
        <FinalConnection error />
      </Provider>
    )
    expect(wrapper.instance().props.children.props.error).to.equal(true)
  })

  it('verifyUsername() should return true when username is empty', () => {
    expect(verifyUsername('')).to.be.equal(true)
  })
  it('verifyUsername() should return true when username == jeanjeanjeanjeanjeanjean', () => {
    expect(verifyUsername('jeanjeanjeanjeanjeanjean')).to.be.equal(true)
  })
  it('verifyUsername() should return false when username == fifiblop', () => {
    expect(verifyUsername('fifiblop')).to.be.equal(false)
  })
})
