import io from "socket.io-client"
const socket = io("https://redtetris42.herokuapp.com")

export { socket }
