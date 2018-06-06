import React from "react"
import "./style.scss"

import PlayerItem from "../PlayerItem"

let PlayerList = ({ players, playerStatus, currentPlayerId, gameStatus }) => {
  return (
    <ul className="player-list">
      {Object.keys(players)
        .sort((a, b) => {
          return players[a].winner > players[b].winner
        })
        .map(playerId => {
          let player = players[playerId]
          return (
            <PlayerItem
              key={playerId}
              playerId={playerId}
              player={player}
              currentPlayerId={currentPlayerId}
              playerStatus={playerStatus}
              gameStatus={gameStatus}
            />
          )
        })}
    </ul>
  )
}

export default PlayerList
