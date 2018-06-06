import React from 'react'

import chai, { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import chaiRedux from 'chai-redux'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import PlayerList from '../../../src/client/components/PlayerList'
import reducers from '../../../src/client/reducers'

chai.use(chaiRedux)
Enzyme.configure({ adapter: new Adapter() })

describe('COMPONENT / <PlayerList />', () => {
  it('should render', () => {
    const players = {
      1: {
        username: 'fifi',
        winner: false,
        totalScore: 400
      },
      2: {
        username: 'kiki',
        winner: true,
        totalScore: 1400
      }
    }
    const wrapper = mount(
      <PlayerList
        players={players}
        currentPlayerId={2}
        playerStatus={() => {}}
        gameStatus='Waiting'
      />
    )
    expect(wrapper.find(PlayerList).exists()).to.be.true
  })
})
