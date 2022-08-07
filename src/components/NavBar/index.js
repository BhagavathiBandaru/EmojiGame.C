// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProcess} = props

  return (
    <nav className="navbar-container">
      <div className="navbar-logo-score-container">
        <div className="logo-heading-container">
          <img
            alt="emoji logo"
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <h1 className="heading">Emoji Game</h1>
        </div>
        {isGameInProcess && (
          <div className="score-container">
            <p className="score">Score :{currentScore}</p>
            <p className="score">Top Score:{topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
