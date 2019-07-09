import React, { Component } from 'react'

export default class Message extends Component {
  constructor() {
    super()
    this.state = {
      Message: 'Welcome visitor'
    }
  }
  changeMessage() {
    this.setState({
      Message: 'thank you'
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribed</button>
      </div>
    )
  }
}
