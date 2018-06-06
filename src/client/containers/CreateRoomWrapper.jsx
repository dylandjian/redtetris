import { connect } from 'react-redux'
import { createRoom } from '../actions/room'
import { bindActionCreators } from 'redux'
import { addError } from '../actions/user'

import CreateRoomWrapper from '../components/CreateRoomWrapper'

const mapStateToProps = state => {
  return {
    currentRoom: state.game.hashName,
    username: state.user.username,
    error: state.user.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createRoom: createRoom,
    addError: bindActionCreators(addError, dispatch)
  }
}

const FinalCreateRoomWrapper = connect(mapStateToProps, mapDispatchToProps)(
  CreateRoomWrapper
)

export default FinalCreateRoomWrapper
