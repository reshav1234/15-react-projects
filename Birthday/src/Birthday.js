import React, { useState } from 'react'
import data from "./data"
import List from "./List"
const Birthday = () => 
{
  const [birthday, setBirthday] = useState(data)

  // To remove all the birthday list
  const removeList = () =>
  {
    setBirthday([])
  }

  return (
    <> 
      <h3>{birthday.length}birthdays today</h3>
      <div>
        <List birthday = {birthday} />
        <button onClick = {removeList}>Clear All</button>
      </div>
    </>
  )
}

export default Birthday


