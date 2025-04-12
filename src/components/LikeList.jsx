import React from 'react'

const LikeList = ({text}) => {
  return (
    <li className='list-none text-lg text-third font-medium font-quicksand leading-6 hover:text-fourth hover:font-bold duration-300'>{text}</li>
  )
}

export default LikeList