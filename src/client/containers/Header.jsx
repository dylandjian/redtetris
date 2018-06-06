import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Header from "../components/Header"

const mapStateToProps = state => {
  let roomNameValue =
    state.game.hashName && state.rooms[state.game.hashName]
      ? state.rooms[state.game.hashName].roomName
      : null
  return {
    username: state.user.username,
    roomName: roomNameValue
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const FinalHeader = connect(mapStateToProps, mapDispatchToProps)(Header)

export default FinalHeader
