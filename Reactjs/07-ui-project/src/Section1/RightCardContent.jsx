const RightCardContent = (props) => {
  return (
    <div className="absolute inset-0 p-5 flex flex-col justify-between">
      
      <h2 className="h-10 w-10 rounded-full text-xl bg-white flex justify-center items-center font-semibold">
        {props.id + 1}
      </h2>

      <div>
        <p className="text-white text-shadow-2xs leading-relaxed mb-14">
          {props.intro}
        </p>

        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">
            {props.tag}
          </button>

          <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
