import React from 'react'
import Person from './Person';

function NameList() {
  const names = ['Bruce', 'clack', 'weuif', 'Bruce']
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

  const NameList = names.map((name, index) => <h2 key={index}>{index}.{name}</h2>
  )
  return (
    <div>
      {NameList}
    </div>
  )
}

export default NameList

