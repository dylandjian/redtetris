import React from 'react'
import './style.scss'
import { _createGrid } from '../../utils'

let cdActions = {
  canmoveUp: true,
  canmoveLeft: true,
  canmoveRight: true,
  canmoveDown: true,
  canpushDown: true
}

const Board = ({ board, score, actions, done }) => {
  return (
    <div className='board-container'>
      {board &&
        <div
          ref={div => div && div.focus()}
          className='board'
          onKeyDown={evt => {
            handleKeyDown(actions, evt)
          }}
          tabIndex='0'
        >
          {_createGrid(board, done)}
        </div>}
    </div>
  )
}

const checkCooldown = action => {
  if (cdActions['can' + action.name]) {
    action()
    cdActions['can' + action.name] = !cdActions['can' + action.name]
    setTimeout(() => {
      cdActions['can' + action.name] = !cdActions['can' + action.name]
    }, 20)
  }
}

const handleKeyDown = (actions, evt) => {
  switch (evt.key) {
    case 'ArrowLeft':
      checkCooldown(actions.moveLeft)
      break
    case 'ArrowRight':
      checkCooldown(actions.moveRight)
      break
    case 'ArrowDown':
      checkCooldown(actions.moveDown)
      break
    case 'ArrowUp':
      checkCooldown(actions.moveUp)
      break
    case ' ':
      checkCooldown(actions.pushDown)
      break
    default:
      break
  }
}

export default Board
