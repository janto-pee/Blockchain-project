import React from 'react'
import Button from './Button'
import Input from './Input'

const Banner = () => {
  return (
    <div className='flex items-center bg-gray-900 flex-col md:flex-row gap-6 p-4 rounded-lg'>
        <div className="basis-4/6">
            <h1 className="text-5xl max-w-sm font-semibold text-gray-200">Subscribe to our newsletter</h1>
        </div>
        <div className='basis-2/6 flex flex-col gap-2'>
            <p className='text-gray-300'>Enter your email below</p>
            <Input inputType={'email'} inputName='email' inputPlaceholder={'Enter email'} />
            <Button buttonClass={'px-6 py-3 bg-black text-white mb-2 font-semibold w-full hover:bg-sky-300'} buttonName={'Subscribe'} />
        </div>
    </div>
  )
}

export default Banner