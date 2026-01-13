import React from 'react'

function App() {
  return (
    <div>
      <h2>hey</h2>
      <button onClick={function(){
        console.log('button clicked');
      }}>
        change text
      </button>
    </div>
  )
}

export default App