import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import Lobby from "../views/Lobby"

const mapStateToProps = state => {
  return {
    username: state.user.username,
    currentGame: state.game.hashName
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const FinalLobby = connect(mapStateToProps, mapDispatchToProps)(Lobby)

export default FinalLobby
