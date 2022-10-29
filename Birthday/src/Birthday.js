import React, { useState } from 'react'
import List from "./List"
import data from "./data"

const Birthday = () => 
{
  const [birthday, setBirthday] = useState(data)

  const removeAll = () =>
  {
    setBirthday([])
  }
  return (
    <div>
      <h2>{data.length} birthdays today</h2>
      <List birthday = {birthday} />
      <button onClick = {removeAll}>Clear All</button>
    </div>
  )
}

export default Birthday