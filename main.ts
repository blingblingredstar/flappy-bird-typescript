export const cvs = document.getElementById('cvs') as HTMLCanvasElement
export const ctx = cvs.getContext('2d') as CanvasRenderingContext2D
import game from './ts/game'
import Background from './ts/Background'
import sprite from './ts/sprite'
import Bird from './ts/Bird'

cvs.addEventListener('click', event => {
  switch (game.state.current) {
    case game.state.getReady:
      game.state.setGaming()
      break
    case game.state.gaming:
      if (game.bird.sY - game.bird.radius <= 0) {
        return
      }
      game.bird.flap()
      break
    case game.state.gameOver:
      const rect = cvs.getBoundingClientRect()
      const clickX = event.clientX - rect.left
      const clickY = event.clientY - rect.top

      if (
        // 检查是否点击开始按钮
        clickX >= game.startBtn.x &&
        clickX <= game.startBtn.x + game.startBtn.width &&
        clickY >= game.startBtn.y &&
        clickY <= game.startBtn.y + game.startBtn.height
      ) {
        game.pipe.reset()
        game.bird.speedReset()
        game.score.reset()
        game.state.setGameReady()
      }
      break
  }
})

game.loop()
