import React from 'react'

const App = () => {
  const submitHandler = (submit) =>{
    submit.preventDefault();

    console.log("submitted...");
    
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your name' />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default App