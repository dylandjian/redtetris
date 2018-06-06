import { socket } from "../socket"

const updatedBoard = (board, id, done) => ({
  type: "UPDATE_BOARD",
  board,
  id,
  done
})

export const updateBoard = dispatch => {
  socket.on("updateBoard", data => {
    dispatch(updatedBoard(data.board, data.id, data.done))
  })
}

export const moveLeft = () => {
  socket.emit("moveLeft")
}

export const moveRight = () => {
  socket.emit("moveRight")
}

export const moveDown = () => {
  socket.emit("moveDown")
}

export const moveUp = () => {
  socket.emit("moveUp")
}

export const pushDown = () => {
  socket.emit("pushDown")
}
