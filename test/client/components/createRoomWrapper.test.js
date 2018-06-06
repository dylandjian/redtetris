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

import FinalCreateRoomWrapper
  from '../../../src/client/containers/CreateRoomWrapper'
import CreateRoomWrapper from '../../../src/client/components/CreateRoomWrapper'
import CreateRoomInput from '../../../src/client/components/CreateRoomInput'
import reducers from '../../../src/client/reducers'

const createroomwrapper = rewire(
  '../../../src/client/components/CreateRoomWrapper/index.jsx'
)
const ErrorComponent = createroomwrapper.__get__('ErrorComponent')

describe('COMPONENT / <CreateRoomWrapper />', () => {
  it('should render <CreateRoomInput />', () => {
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger]
    })
    const wrapper = mount(
      <Provider store={store}>
        <FinalCreateRoomWrapper />
      </Provider>
    )
    expect(wrapper.find(CreateRoomInput).exists()).to.be.true
  })
  it('shouldnt render <CreateRoomInput />', () => {
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger]
    })
    const wrapper = shallow(
      <Provider store={store}>
        <CreateRoomWrapper currentRoom='sfsd' username='fifi' />
      </Provider>
    )
    expect(
      wrapper.find(CreateRoomWrapper).dive().find(Redirect).exists()
    ).to.equal(true)
  })
  it('should render <ErrorComponent />', () => {
    const wrapper = shallow(<ErrorComponent />)
    expect(wrapper.exists()).to.equal(true)
  })
})
