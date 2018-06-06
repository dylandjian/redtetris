import React from "react"
import Connection from "../../containers/Connection"

import "./style.scss"

const ConnectionView = () => {
  return (
    <div className="connection-view">
      <div className="bloc bloc--vh-align">
        <h1 className="logo">
          <span className="logo--red">RED</span>
          <br />TETRIS
        </h1>
      </div>
      <div className="bloc bloc--vh-align">
        <Connection />
      </div>
    </div>
  )
}

export default ConnectionView
