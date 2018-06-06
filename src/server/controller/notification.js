class Notification {
  constructor(io) {
    this.io = io
  }

  userNotification = (socket, message) => {
    socket.emit("notification", message)
    console.log("[%s] Notification: %s", socket.id, message)
  }

  gameNotification = (hashName, message) => {
    this.io.to(hashName).emit("notification", message)
    console.log("[%s] Game notification: %s", hashName, message)
  }

  serverNotification = message => {
    this.io.sockets.emit("notification", message)
    console.log("[!!] Server notification: %s [!!]", message)
  }

  log = message => {
    console.log(message)
  }
}

export default Notification
