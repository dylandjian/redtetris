import { combineReducers } from "redux"
import user from "./user"
import notifications from "./notifications"
import rooms from "./rooms"
import game from "./game"

const store = combineReducers({
  user,
  notifications,
  rooms,
  game
})

export default store
