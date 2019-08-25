import Background from './Background'
import { cvs, ctx } from '../main'
import ForeGround from './Foreground'
import Bird from './Bird'
import GameStatus from './GetStatus'
import Pipe from './Pipe'
import { SCORE_S, DIE, SWOOSHING } from './Audio'

const game = {
  /** 游戏帧数 */
  frame: 0,
  /** 游戏分数 */
  score: {
    best: Number.parseInt(localStorage.getItem('best') as string, 10) || 0,
    value: 0,
    draw() {
      ctx.fillStyle = '#fff'
      ctx.strokeStyle = '#000'
      if (game.state.current === game.state.gaming) {
        ctx.lineWidth = 2
        ctx.font = '35px Teko'
        ctx.fillText(this.value + '', cvs.width / 2, 50)
        ctx.strokeText(this.value + '', cvs.width / 2, 50)
      } else if (game.state.current === game.state.gameOver) {
        ctx.font = '25px Teko'

        ctx.fillText(this.value + '', 225, 186)
        ctx.strokeText(this.value + '', 225, 186)

        ctx.fillText(this.best + '', 225, 228)
        ctx.strokeText(this.best + '', 225, 228)
      }
    },
    updateScore() {
      SCORE_S.play()
      this.value += 1
      this.best = Math.max(this.value, this.best)
      localStorage.setItem('best', this.best + '')
    },

    reset() {
      this.value = 0
    }
  },
  /** 游戏状态 */
  state: {
    /** 游戏当前状态 */
    current: 0,
    /** 准备开始游戏 */
    getReady: 0,
    /** 游戏进行中 */
    gaming: 1,
    /** 游戏结束 */
    gameOver: 2,
    /** */
    isGameReady() {
      return this.current === this.getReady
    },
    isGaming() {
      return this.current === this.gaming
    },
    isGameOver() {
      return this.current === this.gameOver
    },
    setGameReady() {
      this.current = this.getReady
    },
    setGaming() {
      SWOOSHING.play()
      this.current = this.gaming
    },
    setGameOver() {
      DIE.play()
      this.current = this.gameOver
    }
  },
  background: new Background(0, 0, 275, 226, 0, cvs.height - 226, 275, 226),
  foreground: new ForeGround(
    276,
    0,
    224,
    112,
    0,
    cvs.height - 112,
    224,
    112,
    2
  ),
  gameReady: new GameStatus(0, 228, 173, 152, cvs.width / 2 - 173 / 2, 80),
  gameOver: new GameStatus(175, 228, 225, 202, cvs.width / 2 - 225 / 2, 90),
  startBtn: {
    x: 120,
    y: 263,
    width: 83,
    height: 29
  },
  /** 小鸟 */
  bird: new Bird(50, 150, 34, 26),
  /** 管道 */
  pipe: new Pipe(),
  /** 绘制画面 */
  draw() {
    ctx.fillStyle = '#70c5ce'
    ctx.fillRect(0, 0, cvs.width, cvs.height)
    this.background.draw()
    this.foreground.draw()
    this.bird.draw()
    this.pipe.draw()
    this.gameReady.draw(game.state.current === game.state.getReady)
    this.gameOver.draw(game.state.current === game.state.gameOver)
    this.score.draw()
  },
  update() {
    this.foreground.update()
    this.bird.update()
    this.pipe.update()
  },
  loop() {
    game.draw()
    game.frame++
    game.update()

    requestAnimationFrame(game.loop)
  }
}

export default game
