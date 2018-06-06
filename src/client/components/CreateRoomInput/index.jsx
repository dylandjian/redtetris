import React from 'react'

let roomNameInput = null

const CreateRoomInput = ({ createRoom, addError }) => {
  return (
    <div className='input-btn-grp'>
      <input
        className='input--text'
        type='text'
        ref={input => (roomNameInput = input)}
        onKeyDown={evt => handleKeyDown(createRoom, addError, evt)}
        tabIndex='0'
      />
      <button
        className='button'
        onClick={() => {
          if (verifyRoomName(roomNameInput.value)) {
            createRoom(roomNameInput.value)
            addError(false)
          } else addError(true)
        }}
      >
        Create a room
      </button>
    </div>
  )
}

const verifyRoomName = roomname => {
  let reg = new RegExp('^([a-zA-Z0-9]{1,20})$')
  if (reg.test(roomname)) return true
  return false
}

const handleKeyDown = (createRoomCallback, addError, evt) => {
  if (evt.key === 'Enter') {
    if (verifyRoomName(roomNameInput.value)) {
      createRoomCallback(roomNameInput.value)
      addError(false)
    } else addError(true)
  }
}

export default CreateRoomInput
