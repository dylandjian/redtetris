import React from 'react'

import chai from 'chai'
import { expect } from 'chai'
import chaiRedux from 'chai-redux'
import * as Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import omit from 'lodash/omit'
import rewire from 'rewire'

chai.use(chaiRedux)
Enzyme.configure({ adapter: new Adapter() })

import Board from '../../../src/client/components/Board'
import FinalBoard from '../../../src/client/containers/Board'
import * as BoardActions from '../../../src/client/actions/board'
import reducers from '../../../src/client/reducers'

const board = rewire('../../../src/client/components/Board/index.jsx')
const checkCooldown = board.__get__('checkCooldown')
const handleKeyDown = board.__get__('handleKeyDown')
let boardSample = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
let cdActions = {
  canmoveUp: true,
  canmoveLeft: true,
  canmoveRight: true,
  canmoveDown: true,
  canpushDown: true
}

describe('COMPONENT / <Board />', () => {
  it('should contain a 4 lines, 4 columns grid ', () => {
    const wrapper = shallow(<Board board={boardSample} />)
    expect(wrapper.find('.grid').exists()).to.equal(true)
  })
  it('grid should have 4 lines', () => {
    const wrapper = shallow(<Board board={boardSample} />)
    expect(wrapper.find('.grid').children()).to.have.length(4)
  })
  it('each lines should have 4 columns', () => {
    const wrapper = shallow(<Board board={boardSample} />)
    wrapper.find('.grid').childAt(0).forEach(line => {
      expect(line.children()).to.have.length(4)
    })
  })
  it('should simulate keydown arrowUp', () => {
    const wrapper = shallow(
      <Board
        board={boardSample}
        actions={omit(BoardActions, ['updateBoard'])}
      />
    )
    wrapper.find('.board').simulate('KeyDown', { key: 'ArrowUp' })
  })
  it('should simulate keydown arrowRight', () => {
    const wrapper = shallow(
      <Board
        board={boardSample}
        actions={omit(BoardActions, ['updateBoard'])}
      />
    )
    wrapper.find('.board').simulate('KeyDown', { key: 'ArrowRight' })
  })
  it('should simulate keydown arrowDown', () => {
    const wrapper = shallow(
      <Board
        board={boardSample}
        actions={omit(BoardActions, ['updateBoard'])}
      />
    )
    wrapper.find('.board').simulate('KeyDown', { key: 'ArrowDown' })
  })
  it('should simulate keydown arrowLeft', () => {
    const wrapper = shallow(
      <Board
        board={boardSample}
        actions={omit(BoardActions, ['updateBoard'])}
      />
    )
    wrapper.find('.board').simulate('KeyDown', { key: 'ArrowLeft' })
  })
  it('should simulate keydown space', () => {
    const wrapper = shallow(
      <Board
        board={boardSample}
        actions={omit(BoardActions, ['updateBoard'])}
      />
    )
    wrapper.find('.board').simulate('KeyDown', { key: ' ' })
  })
  it('should cooldown on key down', () => {
    checkCooldown(BoardActions.moveLeft)
    expect(cdActions.canmoveLeft).to.be.equal(true)
  })
  it('should handle arrow Up', () => {
    expect(handleKeyDown(BoardActions, { key: 'arrowUp' }))
  })
  it('should handle arrow Left', () => {
    expect(handleKeyDown(BoardActions, { key: 'arrowLeft' }))
  })
  it('should handle arrow Down', () => {
    expect(handleKeyDown(BoardActions, { key: 'arrowDown' }))
  })
  it('should handle arrow Right', () => {
    expect(handleKeyDown(BoardActions, { key: 'arrowRight' }))
  })
  it('should handle arrow space', () => {
    expect(handleKeyDown(BoardActions, { key: ' ' }))
  })
})
