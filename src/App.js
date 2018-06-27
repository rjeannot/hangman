import React, { Component } from 'react';
import './App.css';

const WORDS = ['HIRONDELLE', 'SEMAINE', 'PARAPLUIE', 'TONNERRE', 'TORCHON', 'JONQUILLE']
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class App extends Component {
  state = {
    wordToDiscover: this.generateWord(),
    guesses: 0,
    usedLetters: new Set([]),
    finished: false
  }

  generateWord() {
    const length = WORDS.length
    let randomIndice = Math.floor(length * Math.random());
    let wordToDiscover = WORDS[randomIndice];
    return wordToDiscover;
  }

  computeDisplay(phrase, usedLetters) {
    return phrase.replace(/\w/g,
      (letter) => (usedLetters.has(letter) ? letter : '_')
    )
  }

  // Arrow fx for binding
  handleLetterClick = (event) => {
    const letter = event.currentTarget.innerHTML;
    const { wordToDiscover, guesses, usedLetters } = this.state;

    const newGuesses = guesses + 1;
    this.setState( { guesses: newGuesses });

    if(!usedLetters.has(letter)) {
      const newUsedLetters = usedLetters.add(letter);
      this.setState( { usedLetters: newUsedLetters });
    }

    const wordToDisplay = this.computeDisplay(wordToDiscover, usedLetters);
    if(wordToDisplay.indexOf('_') === -1) {
      this.setState( { finished: true });
    }
  }

  // Arrow fx for binding
  newGame = () => {
    this.setState({
      wordToDiscover: this.generateWord(),
      guesses: 0,
      usedLetters: new Set([]),
      finished: false
    });
  }

  render() {
    const { wordToDiscover, guesses, usedLetters, finished } = this.state
    return (
      <div className="pendu">
        <div className="guesses">
          Coups : { guesses }
        </div>
        <div className="wordToDiscover">
          { this.computeDisplay(wordToDiscover, usedLetters) }
        </div>
        {!finished ? (
          <div className="letters">
          {LETTERS.map((letter, index) => (
            <span
              key={index}
              className='letter'
              onClick={this.handleLetterClick}>
              {letter}
            </span>
          ))}
        </div>
        ) : (
          <button
            className="newGame"
            onClick={this.newGame}>
            Nouvelle partie
          </button>
        ) }
      </div>
    );
  }
}

export default App;
