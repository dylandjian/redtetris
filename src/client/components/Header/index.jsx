import React from "react"
import "./style.scss"

import Logo from "../Logo"
import UserIcon from "../../assets/images/user.svg"

let Header = ({ username, roomName }) => {
  return (
    <div className="header">
      <span className="header__left">
        <Logo />
      </span>
      <span className="header__middle">
        {roomName &&
          <div className="room-name">
            <span className="room-name__title">ROOM NAME</span>
            <span className="room-name__value">
              {roomName.toUpperCase()}
            </span>
          </div>
        }
      </span>
      <span className="header__right">
        <img src={UserIcon} alt="user icon" className="icon--margin-right" />
        {!username ? "Anonymous" : username}
      </span>
    </div>
  )
}

export default Header
