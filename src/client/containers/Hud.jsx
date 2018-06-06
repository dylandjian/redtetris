import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { updateGameInfo } from "../actions/game"
import Hud from "../components/Hud"

const mapStateToProps = state => {
  return {
    game: state.game,
    currentPlayerId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  updateGameInfo(dispatch)
  return {}
}

const FinalHud = connect(mapStateToProps, mapDispatchToProps)(Hud)

export default FinalHud
