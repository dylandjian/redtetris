import { socket } from "../socket"

let nextNotificationId = 0

const notification = message => ({
  type: "ADD_NOTIFICATION",
  id: nextNotificationId++,
  status: 0,
  message
})

export const addNotification = dispatch => {
  socket.on("notification", message => {
    dispatch(notification(message))
  })
}

export const deleteNotification = id => ({
  type: "DELETE_NOTIFICATION",
  id
})

export const clearNotification = () => ({
  type: "CLEAR_NOTIFICATION"
})
