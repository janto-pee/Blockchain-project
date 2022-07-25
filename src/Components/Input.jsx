import React from 'react'

const Input = ({inputType, inputPlaceholder, inputName, inputChange}) => {
  return (
    <input type={inputType} className='w-full bg-gray-800 text-white my-2 p-2' onChange={inputChange} name={inputName} placeholder={inputPlaceholder} />
  )
}

export default Input