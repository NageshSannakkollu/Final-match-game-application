import './index.css'

const Header = props => {
  const {score, timer} = props
  return (
    <nav className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-image"
      />
      <ul className="score-time-container">
        <p>
          Score: <span className="score-value">{score}</span>
        </p>
        <li className="timer-image-value-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="timer-value">
            <span className="timer-value value">{timer} </span> sec
          </p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
