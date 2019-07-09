import React, { Component } from 'react'

export default class Welcome extends Component {


  render() {
    const { name, heroName } = this.props
    return (
      <div>
        <h1>Welcome your heart here {name} and {heroName}</h1>
      </div>
    )
  }
}
