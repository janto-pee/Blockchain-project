import React from 'react'
import news1 from '../Assets/news.gif'
import Banner from './Banner'
import useFetch from '../FetchAPI/fetchAPI';
import { imageList } from '../utils/data';

const Transactions = () => {
  const allNews = useFetch();
  const NewsList = allNews?.value;

  return (
    <div>
        <h1 className="text-4xl my-4 text-white">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16 mb-24">
          {
            NewsList && NewsList.map((items, i) => (
              <div key={i}>
                <img src={imageList[i]} alt="" className=' h-[4/6]'/>
                <h1 className="my-4 text-gray-200 text-xl">
                  {items.name.length > 35 ? `${items.name.substring(0, 34)}...` : items.name}
                </h1>
                <p className='text-gray-400 mb-6'>{items.description.length > 130? `${items.description.substring(0, 129)}...` : items.description}</p>
                <a href={items.url} className='text-gray-500' >Read More</a>
              </div>
            ))
          }
        </div>
        <Banner />
    </div>
  )
}

export default Transactions