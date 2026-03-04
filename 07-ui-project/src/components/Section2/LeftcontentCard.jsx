import React from 'react'

const LeftcontentCard = () => {
  return (
    <div className="h-full relative w-72 bg-lime-300 rounded-3xl p-6">

            <div className="absolute  top-0 right-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <i className="ri-arrow-right-up-line text-xl"></i>
            </div>

            <div className='py-20'>
                <h2 className="text-3xl text-white font-bold">25%</h2>
                <p className="text-white text-sm mt-2">E-com share of the organized retail in 2020
                </p>
            </div>
              
        </div>
  )
}

export default LeftcontentCard
