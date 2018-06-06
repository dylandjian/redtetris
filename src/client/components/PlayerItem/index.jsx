import React from "react"
import "./style.scss"

import ScoreIcon from "../../assets/images/award.svg"
import StarIcon from "../../assets/images/star.svg"

const Button = ({
  playerId,
  currentPlayerId,
  player,
  playerStatus,
  gameStatus
}) => {
  if (playerId == currentPlayerId) {
    if (gameStatus == "Starting")
      return <button className="button button--disabled">{!player.ready ? "Ready" : "Not ready"}</button>
    return (
      <button className="button" onClick={() => playerStatus()}>
        {!player.ready ? "Ready" : "Not ready"}
      </button>
    )
  }
  return (
    <div className="player-item__not-ready">
      {player.ready ? "Ready" : "Not ready"}
    </div>
  )
}

let PlayerItem = ({
  player,
  currentPlayerId,
  playerStatus,
  playerId,
  gameStatus
}) => {
  let isCurrentPlayer = playerId === currentPlayerId
  let selectedClass = isCurrentPlayer ? "player-item--current" : ""
  return (
    <div className={"player-item " + selectedClass}>
      <span className="player-item__username">
        {player.username}
        {player.winner && (
          <div className="star">
            <span className="star__icon">
              <img src={StarIcon} alt="star icon" className="icon" />
            </span>
          </div>
        )}
      </span>
      <span className="player-item__score">
        <div className="score">
          <span className="score__icon">
            <img src={ScoreIcon} alt="score icon" className="icon" />
          </span>
          <span className="score__value">{player.totalScore} pts</span>
        </div>
      </span>
      <span className="player-item__button">
        <Button
          playerId={playerId}
          currentPlayerId={currentPlayerId}
          player={player}
          playerStatus={playerStatus}
          gameStatus={gameStatus}
        />
      </span>
    </div>
  )
}

export default PlayerItem
