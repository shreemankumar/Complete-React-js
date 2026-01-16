import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function increaseNum(){
   setnum(num + 1)
    console.log("increasing");
    
  }
  function decreaseNum(){
    setnum(num - 1)
    console.log("decreasing");
  }
  function decreaseNumby10(){
    setnum(num - 10)
    console.log("decreasingby10");
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={decreaseNumby10}>Decrease by 10</button>
    </div>
  )
}

export default App