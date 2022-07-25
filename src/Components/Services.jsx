import React from 'react'

const Services = () => {
  return (
    <div className='py-20'>
      <div className="flex flex-col md:flex-row text-gray-100 gap-6 my-6">
        <div className="md:basis-1/2">
          <h4 className="text-2xl font-semibold text-white">Our top users are all over the world with wide coverage</h4>
          <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum optio nisi repellendus nihil ab velit. Corporis unde alias reiciendis facere fugiat, vitae distinctio?</p>
          <div className="my-6 flex md:flex-row gap-4">
            {
              [...Array(3)].map((item, i) => (
                <div key={i} className=''>
                  <p className='text-lg font-semibold mt-6'>200+</p>
                  <small className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
                </div>
              ) )
            }
          </div>
        </div>
        <div className="md:basis-1/2"></div>
      </div>
    </div>
  )
}

export default Services