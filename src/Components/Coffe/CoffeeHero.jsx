import React from 'react'

const CoffeeHero = () => {
  return (
    <div className="relative h-[800px] bg-cover bg-center flex justify-end items-center" style={{ backgroundImage: "url('../../../public/img/3.png')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-[-0.5]"></div>
    <div className="relative z-10 w-[870px] h-[300px] text-white">
      <h4 className="text-[14px] md:text-5xl lg:text-3xl font-bold font-rancho">
      Would you like a Cup of Delicious Coffee?
      </h4>
      <p className="font-rancho mt-4 text-lg md:text-xl max-w-lg">
      It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
      </p>
      <button className="font-rancho mt-6 px-6 py-3 bg-amber-500 text-black rounded-lg shadow-lg hover:bg-amber-600 transition-all">
        Learn More
      </button>
    </div>
  </div>
  )
}

export default CoffeeHero