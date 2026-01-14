import React from 'react'

function App() {
  return (
    <div>
      <h2>hey</h2>
      <button onClick={function(func){
        console.log(func);
      }}>
        change text
      </button>
    </div>
  )
}

export default App