import React from 'react'

const Button = ({buttonClass, buttonName, btnClick}) => {
  return (
    <button className={buttonClass} onClick={btnClick} >{buttonName}</button>
  )
}

export default Button