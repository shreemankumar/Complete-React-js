import React, { useState } from 'react'
import axios from 'axios'
// api call 
// 2 types
// 1) fetch method
// 2) through axios - 3rd party calling


const App = () => {
  
  const [first, setfirst] = useState([])

  const fetchData = async() => {
    console.log("fatched data");
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') // async things so put async and await
    const data = await response.json();
    console.log(data);
    console.log(data.id);
    console.log(data.title);
  }
  const fetchDataFromLorem = async() => {
    const responseAxios = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    
   setfirst(responseAxios.data);
    
  }
  return (
    <div>
    <button onClick={fetchDataFromLorem}>button</button>

    <div>
      {first.map((elem, idx) => (
        <h3 key={idx}>{elem.author} having {elem.id}</h3>
      ))}
    </div>
  </div>
  )
}

export default App