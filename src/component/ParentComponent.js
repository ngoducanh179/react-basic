import React, { Component } from 'react'
import Children from './Children'
class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      parentName: 'parent'
    }

    // this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

  render() {
    return (
      <div>
        <Children greetParent={this.greetParent.bind(this)} />
      </div>
    )
  }
}

export default ParentComponent
