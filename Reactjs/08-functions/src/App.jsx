import React from 'react'
// onClick
// onChange
function App() {
  function onChangeHandler(event){
    console.log(event);
    
  }
  return (
    <div className='box' onMouseMove={(event) => {
      console.log(event.clientX, event.clientY);
    }}>
 
    </div>
  )
}

export default App