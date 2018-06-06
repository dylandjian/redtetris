import crypto from "crypto"
import omit from "lodash/omit"
import Game from "./game"

const REMOVE_FIELDS = ["currentRoom", "id"]

class Room {
  constructor(name) {
    this.hashName = crypto.randomBytes(4).toString("hex")
    this.roomName = name
    this.game = new Game(this.hashName)
  }

  playerCount = () => {
    return Object.keys(this.game.players).length
  }

  toJSON = () => ({
    players: this.playerCount(),
    hashName: this.hashName,
    roomName: this.roomName,
    status: this.game.status
  })
}

export default Room
