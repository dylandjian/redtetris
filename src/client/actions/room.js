import { socket } from "../socket"

const addedRoom = room => ({
  type: "ADD_ROOM",
  room
})

const updatedRoom = room => ({
  type: "UPDATE_ROOM",
  room
})

const deletedRoom = hashName => ({
  type: "DELETE_ROOM",
  hashName
})

export const addRoom = dispatch => {
  socket.on("addRoom", newRoom => {
    dispatch(addedRoom(newRoom))
  })
}

export const createRoomList = dispatch => {
  socket.on("updateRoomList", rooms => {
    rooms.map(newRoom => {
      dispatch(addedRoom(newRoom))
    })
  })
}

export const updateRoom = dispatch => {
  socket.on("updateRoom", newRoom => {
    dispatch(updatedRoom(newRoom))
  })
}

export const deleteRoom = dispatch => {
  socket.on("deleteRoom", hashName => {
    dispatch(deletedRoom(hashName))
  })
}

export const createRoom = roomName => {
  socket.emit("createRoom", roomName)
}

export const fetchRoomList = () => {
  socket.emit("fetchRoomList")
}
