import React from 'react'
import { useState } from 'react'
const App = () => {
  //useState having two elements, first one is the variable Read only and the second one is for write only for update.
  const [Download, setDownload] = useState('download')
  return (
    <div>
      <h1>Click the button to get {Download}</h1>
       <button onClick={() => {
        setDownload("done !")
       }}>Download</button>
      
    </div>
  )
}

export default App