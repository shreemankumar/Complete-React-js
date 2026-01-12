import React from 'react'
import RightCard from './RightCard'

const RightContent = ({ users }) => {
  return (
    <div id='no-scrollbar' className="h-full w-2/3 p-6 flex flex-nowrap gap-4 overflow-x-auto rounded-3xl">
      {users.map((elem, index) => (
        <RightCard
          id={index}
          image={elem.image}
          intro={elem.intro}
          tag={elem.tag}
        />
      ))}
    </div>
  )
}

export default RightContent
