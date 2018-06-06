import { constants } from "./const"

class Board {
  constructor() {
    this.grid = this._iniGrid(constants.BOARD_ROWS, constants.BOARD_COLS)
    this.lineCount = 0
    this.endOfGame = false
    this.pos = { x: 0, y: 0 }
    this.block = false
    this.currentPiece = null
    this.nextPiece = null
    this.score = 0
  }

  // private methods
  _iniGrid = (
    nbLine = constants.BOARD_ROWS,
    nbColumn = constants.BOARD_COLS
  ) => {
    return Array(nbLine)
      .fill(0)
      .map(x => Array(nbColumn).fill(0))
  }

  _handleCollisions = () => {
    for (let y = 0; y < this.currentPiece.getArray().length; y++) {
      for (let x = 0; x < this.currentPiece.getArray()[y].length; x++) {
        let cell = this.currentPiece.getArray()[y][x]
        if (cell !== 0) {
          let coord = { x: x + this.pos.x, y: y + this.pos.y }

          let outOfBoardBottom = coord.y >= constants.BOARD_ROWS
          let touchPiece =
            coord.y < constants.BOARD_ROWS && this.grid[coord.y][coord.x] != 0

          if (outOfBoardBottom || touchPiece) {
            this.pos.y--
            this.grid = this.drawPiece()
            return true
          }
        }
      }
    }
    return false
  }

  _collide = () => {
    for (let y = 0; y < this.currentPiece.getArray().length; y++) {
      for (let x = 0; x < this.currentPiece.getArray()[y].length; x++) {
        let cell = this.currentPiece.getArray()[y][x]
        if (cell !== 0) {
          let coord = { x: x + this.pos.x, y: y + this.pos.y }
          if (this.grid[coord.y][coord.x] != 0) return true
        }
      }
    }
    return false
  }

  _setDefaultPosition = () => {
    this.pos = {
      x:
        ((this.grid[0].length / 2) | 0) -
        ((this.currentPiece.getArray()[0].length / 2) | 0),
      y: 0
    }
  }

  _handlePieceMovement = collisionsTests => {
    for (let y = 0; y < this.currentPiece.getArray().length; y++) {
      for (let x = 0; x < this.currentPiece.getArray()[y].length; x++) {
        let cell = this.currentPiece.getArray()[y][x]
        if (cell !== 0) {
          let coord = { x: x + this.pos.x, y: y + this.pos.y }
          let ret = collisionsTests(coord)
          if (ret) return ret
        }
      }
    }
    return false
  }

  _leftCollisions = coord => {
    let outOfBoardLeft = coord.x < 0
    let touchPieceLeft = this.grid[coord.y][coord.x - 1] != 0
    if (outOfBoardLeft || touchPieceLeft) return true
    return false
  }

  _rightCollisions = coord => {
    let outOfBoardRight = coord.x >= constants.BOARD_COLS
    let touchPieceRight = this.grid[coord.y][coord.x + 1] != 0
    if (outOfBoardRight || touchPieceRight) return true
    return false
  }

  _handleLineCompletion = () => {
    let lineCompletedInARow = 0
    this.grid.forEach((line, index) => {
      if (this._lineIsFull(line)) {
        this._eraseLine(index)
        this.lineCount++
        lineCompletedInARow++
      }
    })
    if (lineCompletedInARow > 0) this._updateScore(lineCompletedInARow)
    return lineCompletedInARow
  }

  _updateScore = nbLines => {
    switch (nbLines) {
      case 1:
        this.score += 40
        break
      case 2:
        this.score += 100
        break
      case 3:
        this.score += 300
        break
      case 4:
        this.score += 1200
        break
      default:
        break
    }
  }

  _eraseLine = lineIndex => {
    this.grid.splice(lineIndex, 1)
    this.grid.unshift(Array(constants.BOARD_COLS).fill(0))
  }

  _lineIsFull = line => {
    for (let i = 0; i < line.length; i++)
      if (line[i] == 0 || line[i] == constants.INDESTRUCTIBLE_LINE_VALUE)
        return false
    return true
  }

  _handleEndOfGame = () =>
    this.grid[0].some(val => val !== 0)
      ? (this.endOfGame = true)
      : (this.endOfGame = false)

  // public methods

  moveLeft = (count = 1) => {
    let queryNewPiece = this._handleCollisions()
    if (!this._handlePieceMovement(this._leftCollisions)) this.pos.x -= count
    return {
      handleReturn: queryNewPiece
    }
  }

  moveRight = (count = 1) => {
    let queryNewPiece = this._handleCollisions()
    if (!this._handlePieceMovement(this._rightCollisions)) this.pos.x += count
    return {
      handleReturn: queryNewPiece
    }
  }

  drop = (count = 1) => {
    if (this.block == false) {
      this.pos.y += count
      let queryNewPiece = this._handleCollisions()
      return {
        nbLineCompleted: this._handleLineCompletion(),
        handleReturn: queryNewPiece
      }
    }
  }

  moveUp = () => {
    this.currentPiece.rotate(this.pos, this.grid)
    return {
      handleReturn: false
    }
  }

  pushDown = () => {
    this.block = true
    while (!this._handleCollisions()) {
      this.pos.y += 1
      this.drawPiece()
    }
    this.drawPiece()
    this.block = false
    return {
      nbLineCompleted: this._handleLineCompletion(),
      handleReturn: true
    }
  }

  insertIndesctructibleLine = nbLines => {
    for (let i = 0; i < nbLines; i++) {
      this.grid.splice(0, 1)
      this.grid.push(
        Array(constants.BOARD_COLS).fill(constants.INDESTRUCTIBLE_LINE_VALUE)
      )
    }
    this.drawPiece()
  }

  drawPiece = () => {
    let actualGrid = JSON.parse(JSON.stringify(this.grid))
    this.currentPiece.getArray().forEach((line, y) => {
      line.forEach((cell, x) => {
        if (
          cell !== 0 &&
          y + this.pos.y < constants.BOARD_ROWS &&
          x + this.pos.x < constants.BOARD_COLS &&
          y + this.pos.y >= 0 &&
          x + this.pos.x >= 0
        ) {
          actualGrid[y + this.pos.y][x + this.pos.x] = cell
        }
      })
    })
    return actualGrid
  }
}

export default Board
