import omit from "lodash/omit"

const rooms = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ROOM":
      return {
        ...state,
        [action.room.hashName]: action.room
      }
    case "UPDATE_ROOM":
      return {
        ...state,
        [action.room.hashName]: action.room
      }
    case "DELETE_ROOM":
      return omit(state, action.hashName)
    default:
      return state
  }
}

export default rooms
