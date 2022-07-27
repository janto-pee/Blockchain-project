import React from 'react'
import map from '../Assets/map2.jpg';

const Services = () => {
  
  return (
    <div className='py-12 md:py-20'>
      <div className="flex flex-col md:flex-row text-gray-100 gap-6 my-6 text-center md:text-left">
        <div className="md:basis-1/2">
          <h4 className="text-2xl font-semibold text-white">Our top users are all over the world with wide coverage</h4>
          <p className='hidden md:flex text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum optio nisi repellendus nihil ab velit. Corporis unde alias reiciendis facere fugiat, vitae distinctio?</p>
          <p className='text-gray-400 md:hidden mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum optio nisi repellendus?</p>
          <div className="hidden my-6 lg:flex md:flex-row gap-4">
            {
              [...Array(3)].map((item, i) => (
                <div key={i} className=''>
                  <p className='text-lg font-semibold mt-6'>200+</p>
                  <small className='hidden md:flex text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
                  <small className='md:hidden text-gray-400'>Lorem ipsum dolor sit.</small>
                </div>
              ) )
            }
          </div>
        </div>
        <div className="md:basis-1/2">
          <img src={map} alt="" className='w-[100%]' />
        </div>
      </div>
    </div>
  )
}

export default Services