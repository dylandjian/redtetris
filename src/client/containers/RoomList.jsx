import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as RoomActions from "../actions/room"
import { joinGame, updateGame } from "../actions/game"
import RoomList from "../components/RoomList"

const mapStateToProps = state => {
  return {
    rooms: state.rooms,
    username: state.user.username
  }
}

const mapDispatchToProps = dispatch => {
  RoomActions.addRoom(dispatch)
  RoomActions.createRoomList(dispatch)
  RoomActions.updateRoom(dispatch)
  RoomActions.deleteRoom(dispatch)
  RoomActions.fetchRoomList()
  updateGame(dispatch)
  return {
    joinGame: joinGame
  }
}

const FinalRoomList = connect(mapStateToProps, mapDispatchToProps)(
  RoomList
)

export default FinalRoomList
