import React from 'react'

export default function Button(props) {
  return (
    <button className='bg-indigo-700 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
      <span className='font-sans font-bold'>
        {props.children}
      </span>
    </button>
  )
}
