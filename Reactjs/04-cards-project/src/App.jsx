import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {
  const arr = [{
    name: "shreeman",
    age: 24
  },{
    name: "sarthak",
    age: 25
  },{
    name: "rahul",
    age: 26
  }]

  arr.map(function(fun){
    console.log(fun.age,fun.name);
  })

  return (
    <div className='parent'>
      {arr.map(function(fun){
        return 
      })}
    </div>
  )
}

export default App