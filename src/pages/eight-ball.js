import React, { Component } from 'react'
import MyView from './view'
import { Link } from 'react-router-dom'
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


class EightBall extends Component {
  constructor () {
    super()
    // what is it - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Constructor
    this.state = {
      answers: ['Yes', 'No', 'Maybe'],
      question: '',
      answer: '',
      random: getRandomIntInclusive(0, 10)

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({question: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({answer: this.state.answers[
      getRandomIntInclusive(0,this.state.answers.length - 1)]})
  }
  render () {
    return (
      <div>
        <Link to="/">Menu</Link>
        <MyView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          random={this.state.random}
          question={this.state.question}
          answer={this.state.answer}
        />
      </div>
    )
  }
}

export default EightBall
