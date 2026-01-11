import React from 'react'

const RightCard = () => {
  return (
    <div className="w-64 h-full relative rounded-3xl overflow-hidden">
      
      {/* Background Image */}
      <img
        className="object-cover w-full h-full"
        src="https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=3087&auto=format&fit=crop"
        alt="card"
      />

      {/* Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        
        {/* Number badge */}
        <h2 className="h-12 w-12 rounded-full bg-white flex justify-center items-center font-bold">
          1
        </h2>

        {/* Content */}
        <div>
          <p className="text-white text-lg leading-normal mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Odit possimus, facere minus consequuntur natus facilis.
          </p>

          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">
              Satisfied
            </button>

            <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RightCard
