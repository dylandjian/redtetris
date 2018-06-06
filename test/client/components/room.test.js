import React from 'react'
import chai, { expect } from 'chai'
import chaiRedux from 'chai-redux'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rewire from 'rewire'
import { HashRouter as Router } from 'react-router-dom'

chai.use(chaiRedux)
Enzyme.configure({ adapter: new Adapter() })

import FinalRoom from '../../../src/client/containers/Room'
import reducers from '../../../src/client/reducers'
const room = rewire('../../../src/client/components/Room/index.jsx')
const roomPlayersTitle = room.__get__('roomPlayersTitle')

describe('CONTAINER / <Room />', () => {
  it('should render', () => {
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger]
    })
    const wrapper = shallow(
      <Provider store={store}>
        <FinalRoom />
      </Provider>
    )
    expect(wrapper.find(FinalRoom).exists()).to.be.true
  })
  it('should render', () => {
    const state = {
      game: {
        status: 'Starting',
        players: {}
      }
    }
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger],
      initialState: state
    })
    const wrapper = mount(
      <Provider store={store}>
        <FinalRoom />
      </Provider>
    )
    wrapper.find(FinalRoom).find('button').simulate('click')
  })
  it('should return 1 player', () => {
    expect(roomPlayersTitle(1)).to.equal('1/4')
  })
  it('should return plural of player', () => {
    expect(roomPlayersTitle(3)).to.equal('3/4')
  })
})
