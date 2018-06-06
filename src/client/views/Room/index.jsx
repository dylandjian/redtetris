import { Redirect } from "react-router"
import React from "react"

import FinalRoom from "../../containers/Room"
import FinalHeader from "../../containers/Header"
import Game from "../Game"

const RoomView = ({ gameStatus, username, currentGame, clearNotification }) => {
  if (!username)
    return (
      <div>
        <Redirect to={`/`} />
      </div>
    )
  if (!currentGame)
    return (
      <div>
        <Redirect to={`/lobby`} />
      </div>
    )
  if (gameStatus === "In game") {
    // clearNotification()
    return (
      <div>
        <FinalHeader />
        <Game />
      </div>
    )
  } else
    return (
      <div>
        <FinalHeader />
        <FinalRoom />
      </div>
    )
}

export default RoomView
