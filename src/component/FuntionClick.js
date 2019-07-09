import React from 'react'

function FuntionClick(state) {

  function clickHanler() {
    console.log('button clicked');
  }
  return (
    <div>
      <div>lon</div>
      <button onClick={clickHanler}>Click</button>
    </div>
  )
}

export default FuntionClick
