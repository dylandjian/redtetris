import omit from "lodash/omit"

let initialState = {
  status: false,
  hashName: null,
  mode: 0,
  players: {}
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_GAME":
      return { ...state, ...action.game }
    case "UPDATE_BOARD":
      return {
        ...state,
        players: {
          ...state.players,
          [action.id]: {
            ...state.players[action.id],
            board: action.board,
            done: action.done
          }
        }
      }
    case "UPDATE_GAME_INFO":
      return {
        ...state,
        players: {
          ...state.players,
          [action.id]: {
            ...state.players[action.id],
            lineCompleted: action.gameInfo.lineCompleted,
            nextPiece: action.gameInfo.nextPiece,
            currentScore: action.gameInfo.score
          }
        }
      }
    case "DELETE_PLAYER":
      return {
        ...state,
        players: omit(state.players, [action.id])
      }
    case "DELETE_GAME":
      return initialState
    default:
      return state
  }
}

export default game
