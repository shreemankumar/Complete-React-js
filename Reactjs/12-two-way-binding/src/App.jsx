import React from 'react'
import { useState } from 'react'
const App = () => {

  const [first, setfirst] = useState('')
  
  function SubmitHandler(event){
    event.preventDefault();
    console.log(first);
    setfirst('');
  }
  function changeEvent(event){
    setfirst(event.target.value);

    
  }
  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input type="text" placeholder='Enter' value={first} onChange={changeEvent}/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default App