import React from 'react'
import './style.scss'
import { _createGrid } from '../../utils'

const Shadow = ({ boards }) => {
  return (
    <div className='shadow-grid'>
      {Object.keys(boards).map(id => {
        return (
          <div className='board-wrapper' key={id}>
            <div className='board-name'>{boards[id].username}</div>
            <div className='board' key={id}>
              {_createGrid(boards[id].board, boards[id].done)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Shadow
