import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: 'hello'
    }
  }

  fuck() {
    this.setState({
      message: "good bye"
    })


  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.fuck.bind(this)}>Click</button>
      </div>
    )
  }
}

export default EventBind
