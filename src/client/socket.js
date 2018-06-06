import io from "socket.io-client"
const socket = io("http://localhost:8081/")
//  const socket = io("http://167.99.33.85:8081/")

export { socket }
