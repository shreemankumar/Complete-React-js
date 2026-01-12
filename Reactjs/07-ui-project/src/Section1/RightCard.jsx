import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className="w-64 shrink-0 h-full relative rounded-3xl overflow-hidden">
      
      <img
        className="object-cover w-full h-full"
        src={props.image}
        alt=""
      />

      <RightCardContent id={props.id} intro={props.intro} tag={props.tag} />
    </div>
  )
}

export default RightCard
