import React from 'react'

import chai, { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import chaiRedux from 'chai-redux'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import Hud from '../../../src/client/components/Hud'
import FinalHud from '../../../src/client/containers/Hud'
import reducers from '../../../src/client/reducers'

chai.use(chaiRedux)
Enzyme.configure({ adapter: new Adapter() })

describe('COMPONENT / <Hud />', () => {
  it('should render', () => {
    const state = {
      user: {
        id: 12
      },
      game: {
        players: {
          12: {
            nextPiece: [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
            currentScore: 400,
            lineCompleted: 3
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
        <FinalHud />
      </Provider>
    )
    expect(wrapper.find(Hud).exists()).to.be.true
  })
})
