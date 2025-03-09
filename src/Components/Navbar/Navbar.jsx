import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
 const userScrolling= () =>{
 
  if (window.scrollY > 20) {
    isnotScrolling(true);
  }else isnotScrolling(false)
 }

const [ Scrolling , isnotScrolling] =useState(false)
window.addEventListener("scroll",userScrolling)

  return (
   <>
   <nav className={` ${ Scrolling === false ? "py-9" : "py-6" } transition[padding] duration-500 fixed top-0 end-0 start-0 z-10 bg-[#2C3E50] `}>
    <div className="container flex justify-between px-16">
    <h2>
      <Link  className={"text-white font-bold uppercase text-3xl"} to={""}>
      start framework
      </Link>
      </h2>
    <ul className='center gap-x-5'> 
      <li>
        <NavLink className={"text-white font-bold uppercase text-lg p-3"} to={"about"}>
          about
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-white font-bold uppercase text-lg p-3"} to={"portfolio"}>
          portfolio
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-white font-bold uppercase text-lg p-3"} to={"contact"}>
        contact
        </NavLink>
      </li>
    </ul>
    </div>
   </nav>
   </>
  )
}

