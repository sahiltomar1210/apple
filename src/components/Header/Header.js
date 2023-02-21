import React from 'react'
import "./Header.css"
const image = require("../../images/logo-black.png");

const Header = () => {
  return (
    <div className="sticky top-0 bg-white p-5 flex justify-between">
      <div className="rounded-xl w-24 ">
        <img className="object-cover border" src={image} alt="" />
      </div>
      <input type="text" placeholder='Search Products..' className='bg-gray-100 w-3/5 py-1 px-4 mx-4 rounded-xl' />
      <div className="mt-3 flex place-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline-block h-8 w-8 rounded-full ring-3 ring-white border -mt-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      </div>
    </div>
  )
}

export default Header
