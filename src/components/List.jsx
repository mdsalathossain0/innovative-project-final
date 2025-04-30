import React from 'react'


const List = ({text, className}) => {
  return (
    <li className={`text-sm lg:text-lg font-semibold list-none text-primary font-san hover:text-fourth duration-300  ${className}`}>{text}</li>
  )
}

export default List