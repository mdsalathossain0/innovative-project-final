import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`text-base md:text-lg text-white font-san font-semibold  px-7 py-[14px] rounded-[100px]   duration-300 ${className}`}>{text}</button>
  )
}

export default Button