import React from 'react'

const SubHeading = ({text,className}) => {
  return (

      <p className={`text-base md:text-lg text-third font-paprika font-normal  leading-7 ${className}`}>{text}</p>

  )
}

export default SubHeading