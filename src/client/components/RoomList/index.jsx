import React from 'react'
import './style.scss'

import RoomItem from '../RoomItem'
import Panel from '../Panel'
import ArrowIcon from '../../assets/images/arrow-right-circle.svg'

let roomName

const RoomList = ({ rooms, username, joinGame }) => {
  let nbRooms = Object.keys(rooms).length
  let roomsExists = nbRooms > 0
  let roomPanelTitle = 'Join room'
  if (roomsExists) {
    return (
      <Panel
        icon={ArrowIcon}
        title={roomPanelTitle}
        subtitle={roomPlural(nbRooms)}
      >
        <ul className='roomlist'>
          {Object.keys(rooms).map(key => {
            let room = rooms[key]
            return (
              <RoomItem
                key={key}
                {...room}
                joinGame={joinGame}
                username={username}
              />
            )
          })}
        </ul>
      </Panel>
    )
  } else {
    return (
      <Panel icon={ArrowIcon} title={roomPanelTitle}>
        <ul className='roomlist roomlist--no-room'>NO ROOM FOUND</ul>
      </Panel>
    )
  }
}

const roomPlural = nbRooms => {
  let singleRoom = nbRooms <= 1
  let roomOrRooms = singleRoom ? 'room' : 'rooms'
  return `${nbRooms} ${roomOrRooms}`
}

export default RoomList
