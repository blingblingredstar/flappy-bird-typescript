import Background from './Background'
import game from './game'

class ForeGround extends Background {
  public moveX: number
  constructor(
    sX: number,
    sY: number,
    width: number,
    height: number,
    dX: number,
    dY: number,
    dWidth: number,
    dHeigh: number,
    moveX: number
  ) {
    super(sX, sY, width, height, dX, dY, dWidth, dHeigh)
    this.moveX = moveX
  }
  public update() {
    if (game.state.current === game.state.gaming) {
      this.dX = (this.dX - this.moveX) % (this.width / 2)
    }
  }
}

export default ForeGround
