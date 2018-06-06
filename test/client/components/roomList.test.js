import React from 'react'

import chai, { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import chaiRedux from 'chai-redux'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rewire from 'rewire'

chai.use(chaiRedux)
Enzyme.configure({ adapter: new Adapter() })

import FinalRoomList from '../../../src/client/containers/RoomList'
import reducers from '../../../src/client/reducers'

const roomlist = rewire('../../../src/client/components/RoomList/index.jsx')
const roomPlural = roomlist.__get__('roomPlural')

describe('COMPONENT / <RoomList />', () => {
  it('should render with no rooms', () => {
    const state = {
      user: {
        username: 'fifi'
      },
      rooms: {}
    }
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger],
      initialState: state
    })
    const wrapper = mount(
      <Provider store={store}>
        <FinalRoomList />
      </Provider>
    )
    expect(wrapper.find(FinalRoomList).exists()).to.be.true
  })
  it('should return 1 room', () => {
    expect(roomPlural(1)).to.equal('1 room')
  })
  it('should return plural of room', () => {
    expect(roomPlural(3)).to.equal('3 rooms')
  })
  it('should render with 1 rooms for roomPlural', () => {
    const state = {
      user: {
        username: 'fifi'
      },
      rooms: {
        1: {
          roomName: 'coucou',
          players: {},
          hashName: 'asasa',
          status: 'Waiting'
        }
      }
    }
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger],
      initialState: state
    })
    const wrapper = shallow(
      <Provider store={store}>
        <FinalRoomList />
      </Provider>
    )
    expect(wrapper.find(FinalRoomList).exists()).to.be.true
  })
  it('should render with 2 rooms', () => {
    const state = {
      user: {
        username: 'fifi'
      },
      rooms: {
        1: {
          roomName: 'coucou',
          players: {},
          hashName: 'asasa',
          status: 'Waiting'
        },
        2: {
          roomName: 'hey',
          players: {},
          hashName: 'sfsfs',
          status: 'Waiting'
        }
      }
    }
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger],
      initialState: state
    })
    const wrapper = shallow(
      <Provider store={store}>
        <FinalRoomList />
      </Provider>
    )
    expect(wrapper.find(FinalRoomList).exists()).to.be.true
  })
})
