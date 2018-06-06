import React from "react"
import "./style.scss"
import Notification from "../Notification"

let NotificationList = ({ notifications, deleteNotification }) => {
  return (
    <ul className="notification-list">
      {notifications.map(notification => {
        return (
          <Notification
            key={notification.id}
            {...notification}
            deleteNotification={deleteNotification}
          />
        )
      })}
    </ul>
  )
}

export default NotificationList
