import React from 'react'
import news from '../Assets/news.gif'
import Banner from './Banner'

const Transactions = () => {
  return (
    <div>
        <h1 className="text-4xl my-4 text-white">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
          {
            [...Array(3)].map((items, i) => (
              <div >
                <img src={news} alt="" />
                <h1 className="my-4 text-gray-300">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem, officia totam aperiam recusandae dignissimos.
                </h1>
                <a href="/" className='text-gray-500' >Read More</a>
              </div>
            ))
          }
        </div>
        <Banner />
    </div>
  )
}

export default Transactions