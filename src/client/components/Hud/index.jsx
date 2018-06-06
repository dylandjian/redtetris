import React from "react"
import "./style.scss"

import { _createGrid } from "../../utils"

const Hud = ({ game, currentPlayerId }) => {
  let currentPlayerInfo = game.players[currentPlayerId]
  let nextPiece = currentPlayerInfo.nextPiece
  let score = currentPlayerInfo.currentScore
  let lineCompleted = currentPlayerInfo.lineCompleted
  return (
    <div className="hud-wrapper">
      <div className="hud">
        <div className="hud__item">
          <h3 className="hud__title">next piece</h3>
          <div className="hud__value">
            <div className="piece-visualizer">
              {_createGrid(nextPiece, false)}
            </div>
          </div>
        </div>
        <div className="hud__item">
          <h3 className="hud__title">score</h3>
          <div className="hud__value">{score}</div>
        </div>
        <div className="hud__item">
          <h3 className="hud__title">line competed</h3>
          <div className="hud__value">{lineCompleted}</div>
        </div>
      </div>
    </div>
  )
}

export default Hud
