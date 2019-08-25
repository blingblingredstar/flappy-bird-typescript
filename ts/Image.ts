class SpriteImage {
  /** 图片位于精灵图的x坐标起点 */
  public sX: number
  /** 图片位于精灵图的y坐标起点 */
  public sY: number
  /** 图片宽度 */
  public width: number
  /** 图片高度 */
  public height: number
  constructor(sX: number, sY: number, width: number, height: number) {
    this.sX = sX
    this.sY = sY
    this.width = width
    this.height = height
  }
}
export default SpriteImage
