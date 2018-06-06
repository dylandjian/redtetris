import { constants } from './const'

class Piece {
  constructor (pieceName) {
    this.pieceName = pieceName
    this.piece = constants[pieceName]
    this._tmpPiece = []
    this.used = 0
  }

  getArray = () => {
    return this.piece
  }

  rotate = (piecePosition, currentBoard) => {
    this._tmpPiece = []
    for (let i = 0; i < this.piece[0].length; i++) {
      let row = this.piece.map(e => e[i]).reverse()
      this._tmpPiece.push(row)
    }
    if (
      this._pieceOutOfBoard(piecePosition) ||
      this._piecesCollide(piecePosition, currentBoard)
    ) {
      return false
    }
    this.piece = this._tmpPiece
  }

  _pieceOutOfBoard = piecePosition => {
    for (let y = 0; y < this._tmpPiece.length; y++) {
      for (let x = 0; x < this._tmpPiece[y].length; x++) {
        let outOfBoardRight = x + piecePosition.x >= constants.BOARD_COLS
        let outOfBoardLeft = x + piecePosition.x < 0
        let outOfBoardBottom = y + piecePosition.y >= constants.BOARD_ROWS
        if (outOfBoardLeft || outOfBoardRight || outOfBoardBottom) return true
      }
    }
    return false
  }

  _piecesCollide = (piecePosition, currentBoard) => {
    for (let y = 0; y < this._tmpPiece.length; y++) {
      for (let x = 0; x < this._tmpPiece[y].length; x++) {
        let piecesCollide =
          currentBoard[y + piecePosition.y][x + piecePosition.x] != 0
        if (piecesCollide) return true
      }
    }
    return false
  }
}

export default Piece
