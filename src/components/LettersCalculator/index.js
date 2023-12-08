import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onTypeLetters = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="bg-container">
          <div className="input-container">
            <h1 className="heading">Calculate the Letters you enter</h1>

            <label className="label-El" htmlFor="inputEl">
              Enter the phrase
            </label>
            <input
              type="text"
              id="inputEl"
              placeholder="Enter the phrase"
              className="input-El"
              onChange={this.onTypeLetters}
            />

            <p className="para">No.of letters: {count}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="image"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
