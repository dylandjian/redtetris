const notifications = (state = [], action) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return [
        ...state,
        {
          id: action.id,
          message: action.message,
          state: 0
        }
      ]
    case "DELETE_NOTIFICATION":
      return state.filter(message => message.id !== action.id)
    case "CLEAR_NOTIFICATION":
      return []
    default:
      return state
  }
}

export default notifications
