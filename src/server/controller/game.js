import { constants } from "./const"
import Piece from "./piece"
import shuffle from "lodash/shuffle"

class Game {
  constructor(hashName) {
    this.players = {}
    this.status = "About to start"
    this.mode = "Normal"
    this.hashName = hashName
    this.pieces = []
    this.done = 0
  }

  addPlayer = player => {
    this.players[player.id] = player
    this.updateStatus()
  }

  removePlayer = id => {
    if (this.players[id].done) this.done--
    delete this.players[id]
    this.updateStatus()
  }

  reset = () => {
    this.status = "About to start"
    this.done = 0
    this.pieces = []
    Object.keys(this.players).map(playerId => {
      this.players[playerId].reset()
    })
  }

  resetWinner = () => {
    Object.keys(this.players).map(playerId => {
      this.players[playerId].winner = false
    })
  }

  updateStatus = (status = null) => {
    if (status) this.status = status
    else if (this.status !== "In game" && this.status !== "Starting") {
      let playerCount = Object.keys(this.players).length
      if (playerCount === 4) this.status = "Full"
      else this.status = "About to start"
    }
  }

  updateMode = mode => {
    this.mode = mode
  }

  toJSON = () => ({
    status: this.status,
    mode: this.mode,
    hashName: this.hashName,
    players: this.players
  })

  generatePiecesArray = () => {
    let piecesName = [
      "STICK",
      "SQUARE",
      "PYRAMID",
      "RIGHT_SNAKE",
      "LEFT_SNAKE",
      "GAMMA",
      "ALPHA"
    ]
    let newPieces = []
    piecesName.map(pieceName => {
      for (let i = 0; i < constants.NUMBER_PIECE_GEN; i++) {
        newPieces.push(new Piece(pieceName))
      }
    })
    this.pieces.push.apply(this.pieces, shuffle(newPieces))
  }

  _getValueBetween = (min, max) => Math.floor(Math.random() * (max - min) + min)

  getNextPiece = playerId => {
    let idx = this.players[playerId].idx
    if (idx >= this.pieces.length) this.generatePiecesArray()
    let nextPiece = this.pieces[idx]
    nextPiece.used++
    this.players[playerId].idx++
    //if (nextPiece.used == Object.keys(this.players).length) this.pieces[idx] = 0
    return new Piece(nextPiece.pieceName)
  }
}

export default Game
