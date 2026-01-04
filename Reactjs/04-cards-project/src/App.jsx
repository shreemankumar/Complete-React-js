import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {
  Array = [45,56,67]
  return (
    <div className='parent'>
      <User name="shrerman" age = {Array[0]} />
      <User name="rajesh" age = {Array[1]} />
      <User name="subha" age = {Array[2]} />
       </div>
  )
}

export default App