import SpriteImage from './Image'
import { ctx } from '../main'
import game from './game'
import sprite from './sprite'

class GameStatus extends SpriteImage {
  public dX: number
  public dY: number
  constructor(
    sX: number,
    sY: number,
    width: number,
    height: number,
    dX: number,
    dY: number
  ) {
    super(sX, sY, width, height)
    this.dX = dX
    this.dY = dY
  }
  public draw(gameFlag: boolean) {
    if (gameFlag) {
      ctx.drawImage(
        sprite,
        this.sX,
        this.sY,
        this.width,
        this.height,
        this.dX,
        this.dY,
        this.width,
        this.height
      )
    }
  }
}

export default GameStatus
