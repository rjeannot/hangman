import React, { Component } from 'react';
import './App.css';

const WORDS = ['HIRONDELLE', 'SEMAINE', 'PARAPLUIE', 'TONNERRE', 'TORCHON', 'JONQUILLE']
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class App extends Component {
  state = {
    wordToDiscover: this.generateWord(),
    guesses: 0,
    usedLetters: new Set([])
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

  render() {
    const { wordToDiscover, guesses, usedLetters } = this.state
    return (
      <div className="pendu">
        <div className="guesses">
          { guesses }
        </div>
        <div className="wordToDiscover">
          { this.computeDisplay(wordToDiscover, usedLetters) }
        </div>
        <div className="letters">
          {LETTERS.map((letter, index) => (
            () => (
              <span>Hey </span>
            )
          ))}
        </div>
      </div>
    );
  }
}

export default App;
