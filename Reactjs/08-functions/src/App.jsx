import React from 'react'
// onClick
// onChange
function App() {
  function onChangeHandler(event){
    console.log(event);
    
  }
  return (
    <div>
      < input onChange={function(func){
        onChangeHandler(func.target.value)
      }} placeholder='Enter Your Name' type='text'>
  
      </input>
    </div>
  )
}

export default App