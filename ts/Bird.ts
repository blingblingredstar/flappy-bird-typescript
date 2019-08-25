import SpriteImage from './Image'
import sprite from './sprite'
import { ctx, cvs } from '../main'
import game from './game'
import { DEGREE } from './utils'
import { FLAP } from './Audio'

interface ICoor {
  /** 横坐标 */
  sX: number
  /** 纵坐标 */
  sY: number
}

class Bird extends SpriteImage {
  /** 动画数组 */
  public animation: ICoor[]
  /** 半径 */
  public radius: number
  /** 小鸟动画帧数 */
  public frame: number
  /** 重力系数 */
  public gravity: number
  /** 跳跃高度 */
  public jump: number
  /** 速度 */
  public speed: number
  /** 旋转角度 */
  public rotation: number
  /** 当前飞行速度 */
  public period: number
  constructor(sX: number, sY: number, width: number, height: number) {
    super(sX, sY, width, height)
    this.animation = [
      { sX: 276, sY: 112 },
      { sX: 276, sY: 139 },
      { sX: 276, sY: 164 },
      { sX: 276, sY: 139 }
    ]
    this.radius = 12
    this.frame = 0
    this.gravity = 0.25
    this.jump = 4.6
    this.speed = 0
    this.rotation = 0
    this.period = 0
  }
  public draw() {
    const bird = this.animation[this.frame]
    ctx.save()
    ctx.translate(this.sX, this.sY)
    ctx.rotate(this.rotation)
    ctx.drawImage(
      sprite,
      bird.sX,
      bird.sY,
      this.width,
      this.height,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    )
    ctx.restore()
  }
  public update() {
    /** 小鸟飞行速度 */
    this.period = game.state.isGameReady() ? 10 : 5
    /** 游戏每运行5帧，鸟运动1帧 */
    this.frame += game.frame % this.period === 0 ? 1 : 0
    /** 鸟的帧数每超过动画数组长度就归零 */
    this.frame = this.frame % this.animation.length

    if (game.state.isGameReady()) {
      this.sY = 150
      this.rotation = 0 * DEGREE
    } else {
      this.speed += this.gravity
      this.sY += this.speed

      if (this.sY + this.height / 2 >= cvs.height - game.foreground.height) {
        this.sY = cvs.height - game.foreground.height - this.height / 2
        if (game.state.isGaming()) {
          game.state.setGameOver()
        }
      }

      if (this.speed >= this.jump) {
        this.rotation = 90 * DEGREE
        this.frame = 1
      } else {
        this.rotation = -25 * DEGREE
      }
    }
  }
  /** 小鸟跳跃 */
  public flap() {
    FLAP.play()
    this.speed = -this.jump
  }
  public speedReset() {
    this.speed = 0
  }
}

export default Bird
