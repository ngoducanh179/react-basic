import React from 'react'

const Hello = () => {
  const state = {
    welcome: 'Welcome here'
  }

  return (
    <div>
      <h1 >{state.welcome}</h1>
      <button onClick={() => changeMessage()}>Please click</button>
    </div>
  )
}

export default Hello