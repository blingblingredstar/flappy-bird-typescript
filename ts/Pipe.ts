import { ctx, cvs } from '../main'
import sprite from './sprite'
import game from './game'

interface ICoor {
  sX: number
  sY: number
}

class Pipe {
  public top: ICoor
  public bottom: ICoor
  public position: ICoor[]
  public width: number
  public height: number
  public gap: number
  public maxYposition: -150
  public dX: number
  constructor() {
    this.top = {
      sX: 553,
      sY: 0
    }
    this.bottom = {
      sX: 502,
      sY: 0
    }

    this.position = []

    this.width = 53
    this.height = 400
    this.gap = 85
    this.maxYposition = -150
    this.dX = 2
  }

  public draw() {
    this.position.forEach(p => {
      const topYPosition = p.sY
      const bottomYPosition = p.sY + this.height + this.gap

      ctx.drawImage(
        sprite,
        this.top.sX,
        this.top.sY,
        this.width,
        this.height,
        p.sX,
        topYPosition,
        this.width,
        this.height
      )

      ctx.drawImage(
        sprite,
        this.bottom.sX,
        this.bottom.sY,
        this.width,
        this.height,
        p.sX,
        bottomYPosition,
        this.width,
        this.height
      )
    })
  }

  public update() {
    if (!game.state.isGaming()) {
      return
    }
    if (game.frame % 100 === 0) {
      this.position.push({
        sX: cvs.width,
        sY: this.maxYposition * (Math.random() + 1)
      })
    }

    this.position.forEach(p => {
      const bottomPipeYPosition = p.sY + this.height + this.gap
      /** 碰撞检测 */
      if (
        // 检测是否与顶部管道碰撞
        game.bird.sX + game.bird.radius > p.sX &&
        game.bird.sX - game.bird.radius < p.sX + this.width &&
        game.bird.sY + game.bird.radius > p.sY &&
        game.bird.sY - game.bird.radius < p.sY + this.height
      ) {
        game.state.setGameOver()
      }
      if (
        // 检测是否与底部管道碰撞
        game.bird.sX + game.bird.radius > p.sX &&
        game.bird.sX - game.bird.radius < p.sX + this.width &&
        game.bird.sY + game.bird.radius > bottomPipeYPosition &&
        game.bird.sY - game.bird.radius < bottomPipeYPosition + this.height
      ) {
        game.state.setGameOver()
      }

      p.sX -= this.dX

      if (p.sX + this.width <= 0) {
        this.position.shift()

        game.score.updateScore()
      }
    })
  }

  public reset() {
    this.position = []
  }
}

export default Pipe
