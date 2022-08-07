// Write your code here.

import './index.css'

const LOSE_IMG = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMG = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imgUrl = isWon ? WON_IMG : LOSE_IMG
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreDisplay = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-loss-card">
      <div className="status-score-display-section">
        <h1 className="status-text">{gameStatus}</h1>
        <p className="gameLabel">{scoreDisplay}</p>
        <p className="score-value">{score}</p>
        <button type="button" className="play-btn" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img className="win-or-loss-img" src={imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
