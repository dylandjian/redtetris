import React from 'react'

import chai, { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import chaiRedux from 'chai-redux'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import FinalNotificationList
  from '../../../src/client/containers/NotificationList'
import reducers from '../../../src/client/reducers'

chai.use(chaiRedux)
Enzyme.configure({ adapter: new Adapter() })

describe('COMPONENT / <NotificationList />', () => {
  it('should render', () => {
    const state = {
      notifications: [
        {
          id: 0,
          message: 'hey',
          state: 0
        },
        {
          id: 1,
          message: 'ho',
          state: 0
        },
        {
          id: 3,
          message: 'hi',
          state: 1
        }
      ]
    }
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger],
      initialState: state
    })
    const wrapper = mount(
      <Provider store={store}>
        <FinalNotificationList />
      </Provider>
    )
    expect(wrapper.find(FinalNotificationList).exists()).to.be.true
  })
})
