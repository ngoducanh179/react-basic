import React from 'react'

function Person({ persons }) {
  return (
    <div>
      <h1>
        i'm {persons.name}. i'm at {persons.id}. i have skill at {persons.skill}
      </h1>
    </div>
  )
}

export default Person
