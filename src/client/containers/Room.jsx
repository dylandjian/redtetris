import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  playerStatus,
  leaveGame,
  deleteGame,
  deletePlayer
} from "../actions/game"

import Room from "../components/Room"

const mapStateToProps = state => {
  return {
    rooms: state.rooms,
    game: state.game,
    currentPlayerId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  deleteGame(dispatch)
  deletePlayer(dispatch)
  return {
    playerStatus: playerStatus,
    leaveGame: leaveGame
  }
}

const FinalRoom = connect(mapStateToProps, mapDispatchToProps)(Room)

export default FinalRoom
