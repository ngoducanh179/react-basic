import React from 'react'
import './Mystyle.css'
function Stylesheets(props) {
  // let className = props.primary
  let className = props.primary
  if (className == true) {
    className = 'primary'
  }
  else {
    className = 'blue'
  }
  return (
    <div>
      <h1 className={`${className} font-xl`}>take this one</h1>
    </div>
  )
}

export default Stylesheets
