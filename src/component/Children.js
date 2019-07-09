import React from 'react'

function Children(props) {
  return (
    <div>
      <button onClick={() => props.greetParent('child')}>click</button>
    </div>
  )
}

export default Children