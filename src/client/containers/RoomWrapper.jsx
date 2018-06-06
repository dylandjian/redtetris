import { connect } from "react-redux"
import { createRoom } from "../actions/room"
import { bindActionCreators } from "redux"
import { clearNotification } from "../actions/notification"

import RoomView from "../views/Room"

const mapStateToProps = state => {
  return {
    gameStatus: state.game.status,
    username: state.user.username,
    currentGame: state.game.hashName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearNotification: bindActionCreators(clearNotification, dispatch)
  }
}

const FinalRoomView = connect(mapStateToProps, mapDispatchToProps)(RoomView)

export default FinalRoomView
