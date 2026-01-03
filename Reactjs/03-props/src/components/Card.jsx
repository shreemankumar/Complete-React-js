import React from 'react'

const Card = (props) => {
  console.log(props.user);
  return (
    <div>
      <div className="card">
        <img src={props.image} alt="Userimage" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, aliquid.</p>
        <button className='btn'>View Profile</button>
      </div>
    </div>
  )
}

export default Card