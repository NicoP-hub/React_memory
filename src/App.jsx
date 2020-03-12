import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, { FAKE_HOF } from './HallOfFame'
import HighScoreInput from "./HightScoreInput";

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
const VISUAL_PAUSE_MSECS = 750

class App extends Component {
    state = {
        cards: this.generateCards(),
        currentPair : [],
        guesses : 0,
        hallOfFame : null,
        matchedCardIndices: [],
    }

    // arrow fx for binding
    displayHallOfFame = hallOfFame => {
        this.setState({hallOfFame})
    }

    generateCards() {
        const result = []
        const size = SIDE * SIDE
        const candidates = shuffle(SYMBOLS)
        while (result.length < size) {
          const card = candidates.pop()
          result.push(card, card)
        }
        return shuffle(result)
  }

  getFeedBackForCard(index) {
      const {currentPair, matchedCardIndices} = this.state
      const indexMatched = matchedCardIndices.includes(index)

      if (currentPair.length < 2) {
          return indexMatched || index == currentPair[0] ? 'visible' : 'hidden'
      }
      if (currentPair.includes(index)) {
          return indexMatched ? 'justMatched' : 'justMismatched'
      }
      return indexMatched ? 'visible' : 'hidden'
  }

  // arrow fx for binding
  handleCardClick = index => {
      const { currentPair } = this.state
      if(currentPair.length === 2){
          return
      }
      if(currentPair.length===0){
          this.setState({currentPair : [index]})
          return
      }
      this.handleNewPairCloseBy(index)
  }

  handleNewPairCloseBy = index => {
      const {cards, currentPair, guesses, matchedCardIndices} = this.state
      const newPair = [currentPair[0], index]
      const newGuesses = guesses+1
      const matched = (cards[newPair[0]] === cards[newPair[1]] && newPair[0] !== newPair[1])
      this.setState({ currentPair: newPair, guesses: newGuesses})
      if(matched){
          this.setState({ matchedCardIndices:  [...matchedCardIndices, ...newPair]})
      }
      setTimeout(() => this.setState({currentPair: []}), VISUAL_PAUSE_MSECS)
  }

  render() {
        const { cards, guesses, hallOfFame, matchedCardIndices} = this.state
        const won = matchedCardIndices.length === 2//for test cards.length
      console.log( 'won' + won + '// matchedCardIndices = '+matchedCardIndices.length+' // cards='+cards.length )
        return (
            <div className="memory">
             <GuessCount guesses={guesses}/>
                {cards.map((card, index) => (
                    <Card card={card} feedback={this.getFeedBackForCard(index)} key={index} index={index} onClick={this.handleCardClick} />
                ))}
                { won &&
                    (hallOfFame ?
                        <HallOfFame entries={hallOfFame} /> :
                        (<HighScoreInput guesses={guesses} onStored={this.displayHallOfFame} />)
                    )
                }
            </div>
        )
  }
}

export default App