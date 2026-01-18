import React from 'react'

const App = () => {
  const showData = () => {
    // localStorage.setItem('name','shreeman')
    // localStorage.setItem('age',21)
    // const name = localStorage.getItem('name')
    // const age = localStorage.getItem('age')
    // console.log(name);
    // console.log(age);
    // localStorage.clear();  // for clear all the value form the local storage
    //localStorage.removeItem('name');
    //console.log(name);
    
    // from the array
    const arrayShow = {
      'address' : 'gajapati nagar',
      'pincode' : 760010
    }
    localStorage.setItem('userAddress',JSON.stringify(arrayShow))
   const userData = localStorage.getItem('userAddress')
   const data = JSON.parse(userData);
   console.log(data.address);
   console.log(data.pincode);
   
    


    
  }
  return (
    <div>
      <button className='btn' onClick={showData}>Click</button>
    </div>
  )
}

export default App