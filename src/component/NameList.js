import React from 'react'
import Person from './Person';

function NameList() {
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      skill: 'React'
    },

    {
      id: 2,
      name: 'Ducanh',
      skill: 'Fuck'
    },

    {
      id: 3,
      name: 'you',
      skill: 'are'
    }

  ]

  const NameList = persons.map(persons =>
    <Person persons={persons} />
  )
  return (
    <div>
      {NameList}
    </div>
  )
}

export default NameList

