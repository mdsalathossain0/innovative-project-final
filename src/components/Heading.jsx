import React from 'react'

const Heading = ({text, className}) => {
  return (
    <h2 className={`text-[36px] md:text-5xl text-secondary font-bold font-san ${className}`}> {text}</h2>
  )
}

export default Heading