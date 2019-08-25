import SpriteImage from './Image'
import { ctx } from '../main'
import sprite from './sprite'
export default class Background extends SpriteImage {
  /** 精灵图位于canvas的横坐标 */
  public dX: number
  /** 精灵图位于canvas的纵坐标 */
  public dY: number
  /** 精灵图位于canvas的宽度 */
  public dWidth: number
  /** 精灵图位于canvas的高度 */
  public dHeight: number
  constructor(
    sX: number,
    sY: number,
    width: number,
    heigth: number,
    dX: number,
    dY: number,
    dWidth: number,
    dHeight: number
  ) {
    super(sX, sY, width, heigth)
    this.dX = dX
    this.dY = dY
    this.dWidth = dWidth
    this.dHeight = dHeight
  }
  /** 将图片绘制在canvas元素上 */
  public draw() {
    ctx.drawImage(
      sprite,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.dX,
      this.dY,
      this.dWidth,
      this.dHeight
    )
    ctx.drawImage(
      sprite,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.dX + this.width,
      this.dY,
      this.dWidth,
      this.dHeight
    )
  }
}
