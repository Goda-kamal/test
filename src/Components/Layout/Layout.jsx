import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const {pathname} =useLocation()
console.log(pathname);

  return (
    <>
    <Navbar />
    <div className={`${ pathname==="/" || pathname==="/about" ? "bg-[#1ABC9C]" : "" }   min-h-dvh center pt-32`  }>
      <div className='container text-center'>
        <Outlet />
      </div>
    </div>
    
    <Footer />
    </>
  )
}

export default Layout
