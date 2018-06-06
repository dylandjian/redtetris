import { socket } from '../socket'

const updatedGame = game => ({
  type: 'UPDATE_GAME',
  game
})

const deletedPlayer = id => ({
  type: 'DELETE_PLAYER',
  id
})

const updatedGameInfo = (userId, gameInfo) => ({
  type: 'UPDATE_GAME_INFO',
  id: userId,
  gameInfo
})

export const updateGame = dispatch => {
  socket.on('updateGame', game => {
    dispatch(updatedGame(game))
  })
}

export const joinGame = hashName => {
  socket.emit('joinGame', hashName)
}

export const startGame = () => {
  socket.emit('startGame')
}

export const playerStatus = () => {
  socket.emit('playerStatus')
}

export const deletePlayer = dispatch => {
  socket.on('deletePlayer', id => {
    dispatch(deletedPlayer(id))
  })
}

export const updateGameInfo = dispatch => {
  socket.on('updateGameInfo', gameInfo => {
    dispatch(updatedGameInfo(gameInfo.id, gameInfo))
  })
}

export const leaveGame = () => {
  socket.emit('leaveRoom')
}

export const deleteGame = dispatch => {
  socket.on('deleteGame', () => {
    dispatch({
      type: 'DELETE_GAME'
    })
  })
}
