import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  addNotification,
  deleteNotification
} from "../actions/notification"
import NotificationList from "../components/NotificationList"

const mapStateToProps = state => {
  return {
    notifications: state.notifications
  }
}

const mapDispatchToProps = dispatch => {
  addNotification(dispatch)
  return {
    deleteNotification: bindActionCreators(deleteNotification, dispatch)
  }
}

const FinalNotification = connect(mapStateToProps, mapDispatchToProps)(
  NotificationList
)

export default FinalNotification
