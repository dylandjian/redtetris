import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

import { Redirect } from 'react-router'

let usernameInput = null
const Connection = ({ updateUser, notif, username, error, addError }) => {
  if (username) {
    return (
      <div>
        <Redirect to={`/lobby`} />
      </div>
    )
  }
  return (
    <div className='connection-input'>
      <h2 className='input-label font--normal'>Choose your player name</h2>
      {error &&
        <div className='input-error'>
          Username must be between 1 and 20 characters
        </div>}
      <div className='input-btn-grp'>
        <input
          className='input--text'
          type='text'
          onKeyDown={evt => handleKeyDown(updateUser, addError, evt)}
          tabIndex='0'
          ref={input => {
            usernameInput = input
          }}
        />
        <button
          className='button'
          onClick={() => {
            if (verifyUsername(usernameInput.value)) addError(true)
            else {
              updateUser(usernameInput.value)
              addError(false)
            }
          }}
        >
          Start
        </button>
      </div>
    </div>
  )
}

const verifyUsername = username => {
  let reg = new RegExp('^([a-zA-Z0-9]{1,20})$')
  if (reg.test(username)) return false
  return true
}

/* istanbul ignore next */

const handleKeyDown = (updateUserCallback, addError, evt) => {
  if (evt.key === 'Enter') {
    if (verifyUsername(usernameInput.value)) addError(true)
    else {
      updateUserCallback(usernameInput.value)
      addError(false)
    }
  }
}

export default Connection
