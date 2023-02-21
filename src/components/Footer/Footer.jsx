import React from 'react'
import {  useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Footer = () => {
  const navigate = useNavigate();
  const [path, setpath] = useState(window.location.pathname);

  useEffect(()=>{
    setpath(window.location.pathname)
  },[path])
  const handleClick = () => {
    navigate('/checkout', {replace: true});
    
  };

  const han =()=>{
    navigate('/', {replace: true});
  }
  const order =()=>{
    navigate('/cart', {replace: true});
  }

  return (
    <footer className="bottom-0 fixed bg-white py-5 w-full flex border-t border-gray-200 justify-center space-x-12 text-gray-400 mt-auto">
          <div onClick={han} className={(path === "/" ? 'text-emerald-500 flex justify-center items-center flex-col' : 'flex justify-center items-center flex-col cursor-pointer' )}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span>Home</span>
          </div>
          <div onClick={handleClick} className={(path === "/checkout" ? 'text-emerald-500 flex justify-center items-center flex-col' : 'flex justify-center items-center flex-col cursor-pointer' )}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span>Cart</span>
          </div>
          <div onClick={order} className={(path === "/cart" ? 'text-emerald-500 flex justify-center items-center flex-col' : 'flex justify-center items-center flex-col cursor-pointer' )}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span>Orders</span>
          </div>
      </footer>
  )
}

export default Footer
