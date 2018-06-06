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

import FinalShadow from '../../../src/client/containers/Shadow'
import reducers from '../../../src/client/reducers'

describe('CONTAINER / <Shadow />', () => {
  it('should render 2 shadows', () => {
    const state = {
      game: {
        players: {
          1: {
            username: 'fifi',
            board: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            done: false
          },
          2: {
            username: 'sdad',
            board: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            done: false
          }
        }
      }
    }
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger],
      initialState: state
    })
    const wrapper = mount(
      <Provider store={store}>
        <FinalShadow />
      </Provider>
    )
    expect(wrapper.find(FinalShadow).exists()).to.be.true
  })
})
