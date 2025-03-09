import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

function Heading({text}) {

    const {pathname} =useLocation()
  return (
    <>
    <h1 className={`${ pathname==="/" || pathname==="/about" ? "text-white" : "text-[#2C3E50]"} pb-3 mt-5 uppercase text-4xl font-bold `}>{text}</h1>
    <div className='center gap-x-4  '>
      <div className={`h-1 w-24 ${ pathname==="/" || pathname==="/about" ? "bg-white" : "bg-[#2C3E50]"} `}></div>
      <i class={`fa-solid fa-star ${ pathname==="/" || pathname==="/about" ? "text-white" : "text-[#2C3E50]"}`}></i>
      <div className={`h-1 w-24 ${ pathname==="/" || pathname==="/about" ? "bg-white" : "bg-[#2C3E50]"}`}></div>
    </div>
    </>
  )
}

export default Heading
