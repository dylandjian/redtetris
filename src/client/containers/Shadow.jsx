import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import omit from "lodash/omit"

import Shadow from "../components/Shadow"

const mapStateToProps = state => {
  return {
    boards: omit(state.game.players, [state.user.id])
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const FinalShadow = connect(mapStateToProps, mapDispatchToProps)(Shadow)

export default FinalShadow
