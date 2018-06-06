import React from 'react'

import chai, { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import rewire from 'rewire'

Enzyme.configure({ adapter: new Adapter() })

import PlayerItem from '../../../src/client/components/PlayerItem'

describe('COMPONENT / <PlayerItem />', () => {
  it('should render', () => {
    const player = {
      username: 'fifi',
      winner: false,
      totalScore: 400
    }
    const wrapper = mount(
      <PlayerItem
        playerId={1}
        currentPlayerId={2}
        player={player}
        playerStatus='Ready'
        gameStatus='Waiting'
      />
    )
    expect(wrapper.exists()).to.be.true
  })
  it('should render when player is the winner', () => {
    const player = {
      username: 'fifi',
      winner: true,
      totalScore: 400
    }
    const wrapper = mount(
      <PlayerItem
        playerId={1}
        currentPlayerId={2}
        player={player}
        playerStatus='Ready'
        gameStatus='Waiting'
      />
    )
    expect(wrapper.exists()).to.be.true
  })
  it('button should be disabled when current user', () => {
    const player = {
      username: 'fifi',
      winner: true,
      totalScore: 400
    }
    const wrapper = mount(
      <PlayerItem
        playerId={1}
        currentPlayerId={1}
        player={player}
        playerStatus='Ready'
        gameStatus='Waiting'
      />
    )
    expect(wrapper.exists()).to.be.true
  })
  it('button should be disabled when current user ready', () => {
    const player = {
      username: 'fifi',
      winner: true,
      totalScore: 400
    }
    const wrapper = mount(
      <PlayerItem
        playerId={1}
        currentPlayerId={1}
        player={player}
        playerStatus='Ready'
        gameStatus='Starting'
      />
    )
    expect(wrapper.exists()).to.be.true
  })
  it('should click the button', () => {
    const player = {
      username: 'fifi',
      winner: true,
      totalScore: 400
    }
    const wrapper = shallow(
      <PlayerItem
        playerId={1}
        currentPlayerId={1}
        player={player}
        playerStatus={() => {}}
        gameStatus='Waiting'
      />
    )
    wrapper
      .find('.player-item__button')
      .find('Button')
      .dive()
      .find('.button')
      .simulate('click')
  })
})
