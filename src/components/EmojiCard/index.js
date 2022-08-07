// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiUrl, id, emojiName} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-each-card-container">
      <button className="button" type="submit" onClick={onClickEmojiCard}>
        <img src={emojiUrl} className="emoji-style" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
