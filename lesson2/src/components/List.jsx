import React, { useEffect, useState } from 'react'
import './List.css'

const initialAnimals = [
  { type: 'turtle', icon: '🐢' },
  { type: 'octopus', icon: '🐙' },
  { type: 'fish', icon: '🐠' },
  { type: 'flamingo', icon: '🦩' },
  { type: 'penguin', icon: '🐧' }
]

function List() {
  const [list, setList] = useState(initialAnimals)

  useEffect(() => {
  const unactivatedIndexes = list.map((_, index) => index)
  let intervalId = setInterval(() => {
    if (unactivatedIndexes.length === 0) {
      clearInterval(intervalId)
      return
    }

    const randomIndex = Math.floor(Math.random() * unactivatedIndexes.length)
    const selected = unactivatedIndexes.splice(randomIndex, 1)[0]

    setList(prev => {
      const updatedList = prev.map((item, index) =>
        index === selected ? { ...item, active: true } : item
      )

      const selectedItem = updatedList[selected]
      console.log('Random item ', selectedItem)

      return updatedList
    })
  }, 1000)

  return () => clearInterval(intervalId)
}, [])



  return (
    <table>
      <tbody>
        {list.map((animal, index) => (
          <tr key={index} className={animal.active ? 'active' : ''}>
            <td>{animal.type}</td>
            <td>{animal.icon}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default List
