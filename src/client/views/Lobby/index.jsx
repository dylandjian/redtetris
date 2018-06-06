import React from 'react'
import './style.scss'
import { Redirect } from 'react-router'

import FinalCreateRoomWrapper from '../../containers/CreateRoomWrapper'
import FinalRoomList from '../../containers/RoomList'
import FinalHeader from '../../containers/Header'

const Lobby = ({ username }) => {
  if (!username) {
    return (
      <div>
        <Redirect to={`/`} />
      </div>
    )
  }
  return (
    <div>
      <FinalHeader />
      <div className='lobby-view font--normal'>
        <FinalCreateRoomWrapper />
        <FinalRoomList />
      </div>
    </div>
  )
}

export default Lobby
