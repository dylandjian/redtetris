import React from "react"
import "./style.scss"

import closeCircle from "../../assets/images/x.svg"

const Notification = ({ message, id, status, deleteNotification }) => {
  waitThenClose(deleteNotification, id, 1000)
  return (
    <li className="notification">
      <span className="notification__content"> {message} </span>
      <span className="notification__button-container">
        <img
          className="button--close"
          src={closeCircle}
          alt="close"
          onClick={() => deleteNotification(id)}
        />
      </span>
    </li>
  )
}

const waitThenClose = (deleteCallback, notifId, time) => {
  setTimeout(() => {
    deleteCallback(notifId)
  }, time)
}

export default Notification
