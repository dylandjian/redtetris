import React from "react"
import "./style.scss"
//packages
import { Switch, Route } from "react-router-dom"
//components
import ConnectionView from "../../views/Connection"

import FinalLobbyView from "../../containers/LobbyWrapper"
import FinalRoomView from "../../containers/RoomWrapper"
import FinalNotificationList from "../../containers/NotificationList"

const App = () => {
  return (
    <div>
      <FinalNotificationList />
      <Switch>
        <Route exact path="/" component={ConnectionView} />
        <Route path="/lobby" component={FinalLobbyView} />
        <Route path="/:hashName" component={FinalRoomView} />
      </Switch>
    </div>
  )
}

export default App
