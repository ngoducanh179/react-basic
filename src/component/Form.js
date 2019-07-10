import React, { Component } from 'react'

class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      comments: '',
      topic: 'react'
    }
  }

  click = e => {
    this.setState({
      username: e.target.value
    })

  }

  click2 = e => {
    this.setState({
      comments: e.target.value
    })
  }
  click3 = e => {
    this.setState({
      topic: e.target.value
    })
  }

  submit1 = e => {
    alert(`you username is ${this.state.username} your comment:${this.state.comments} your skill: ${this.state.topic} `)

    e.preventDefault();


  }


  render() {
    return (
      <form onSubmit={this.submit1}>
        <label>UserName</label>
        <input type='text' value={this.state.username} onChange={this.click} />
        <div>
          <label>Comments</label>
          <textarea value={this.state.comments} onChange={this.click2}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.click3}>
            <option value="react">react</option>
            <option value="ajfbeib">ajfbeib</option>
            <option value="fucj">fucj</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
