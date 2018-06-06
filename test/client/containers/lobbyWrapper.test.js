import React from 'react'
import chai, { expect } from 'chai'
import chaiRedux from 'chai-redux'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rewire from 'rewire'
import { createMockStore } from 'redux-test-utils'
import shallowWithStore from './shallowWithStore'
import { HashRouter as Router } from 'react-router-dom'

chai.use(chaiRedux)
Enzyme.configure({ adapter: new Adapter() })

import FinalLobbyWrapper from '../../../src/client/containers/LobbyWrapper'
import reducers from '../../../src/client/reducers'

describe('CONTAINER / <LobbyWrapper />', () => {
  const store = chai.createReduxStore({
    reducer: reducers,
    middlewares: [thunk, logger]
  })
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <FinalLobbyWrapper />
      </Router>
    </Provider>
  )
  it('should render', () => {
    expect(wrapper.find(FinalLobbyWrapper).exists()).to.be.true
  })
})
