import React from 'react'

// function Greet() {
//   return <h1>Hello Vishwas</h1>
// }



function Greet(props) {

  const ShowMessage = () => {
    alert('followed' + props.user);
  }
  const handleClick = () => {
    value =
      setTimeout(() => {
        ShowMessage()
      }, 3000);
  }

  return (
    <div>
      <button onClick={handleClick}>{props.user}</button>
      {/* <div>{fullname}</div> */}
    </div>
  )
}
export default Greet