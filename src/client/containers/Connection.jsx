import { connect } from "react-redux"
import { updateUser, addError } from "../actions/user"
import { bindActionCreators } from "redux"

import Connection from "../components/Connection"

const mapStateToProps = state => {
  return {
    username: state.user.username,
    error: state.user.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: bindActionCreators(updateUser, dispatch),
    addError: bindActionCreators(addError, dispatch)
  }
}

const FinalConnection = connect(mapStateToProps, mapDispatchToProps)(Connection)

export default FinalConnection
