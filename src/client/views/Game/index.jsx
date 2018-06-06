import React from "react"
import "./style.scss"

import FinalBoard from "../../containers/Board"
import FinalShadow from "../../containers/Shadow"
import FinalHud from "../../containers/Hud"

const Game = () => {
  return (
    <div className="game-view">
      <FinalHud />
      <FinalBoard />
      <FinalShadow />
    </div>
  )
}

export default Game
