import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProcess: true,
    topScore: 0,
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
    }
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newHighScore = topScore

    if (currentScore > topScore) {
      newHighScore = currentScore
    }
    this.setState({topScore: newHighScore, isGameInProcess: false})
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojiList = this.getShuffledEmojisList()

    return (
      <ul className="emojis-list-container-arrangement">
        {shuffledEmojiList.map(eachEmojiObject => (
          <EmojiCard
            key={eachEmojiObject.id}
            emojiDetails={eachEmojiObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProcess: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  render() {
    const {clickedEmojisList, isGameInProcess, topScore} = this.state

    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmojisList.length}
          isGameInProcess={isGameInProcess}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {isGameInProcess ? this.renderEmojiList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
