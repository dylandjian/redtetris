import React from 'react'
import './style.scss'
import { Redirect } from 'react-router'

import CreateRoomInput from '../CreateRoomInput'
import Panel from '../Panel'
import CreateIcon from '../../assets/images/edit.svg'

const ErrorComponent = () => {
  return (
    <div className='input-error pannel__error'>
      room name must be between 1 and 20 characters
    </div>
  )
}

const CreateRoomWrapper = ({
  currentRoom,
  username,
  createRoom,
  error,
  addError
}) => {
  if (!currentRoom) {
    return (
      <Panel
        title='Create room'
        icon={CreateIcon}
        subtitle={error ? <ErrorComponent /> : ''}
      >
        <CreateRoomInput addError={addError} createRoom={createRoom} />
      </Panel>
    )
  } else {
    return (
      <div>
        <Redirect to={`/${currentRoom}[${username}]`} />
      </div>
    )
  }
}

export default CreateRoomWrapper
