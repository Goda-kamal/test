import React from 'react'

function Footer() {
  return (
    <>
    
    <div className="footer bg-[rgb(44,62,80)] text-white p-20 ">
    <div className=" card-group m-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 grid ">
      <div className="text-center mb-7">
        <h3 className='text-3xl font-medium '>LOCATION</h3>
        <p className="pt-2" >2215 John Daniel Drive</p>
        <p className="pt-3">Clark, MO 65243</p>
        </div>
      <div className="text-center mb-7">
        <h3 className='text-3xl font-medium '>AROUND THE WEB</h3>
        <div className='mt-3'>
          <i className='mx-2 border border-white p-2 rounded-2xl fa-brands fa-facebook'></i>
          <i className='mx-2 border border-white p-2 rounded-2xl fa-brands fa-twitter'></i>
          <i className='mx-2 border border-white p-2 rounded-2xl fa-brands fa-linkedin-in'></i>
          <i className='mx-2 border border-white p-2 rounded-2xl fa-solid fa-globe '></i>
        </div>
        </div>
      <div className="text-center mb-7">
        <h3 className='text-3xl font-medium '>ABOUT FREELANCER</h3>
        <p className="pt-2">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
    </div>
    <div className="bg-[#1A252F] text-center text-white p-7">
      <p>Copyright © Your Website 2021</p>
    </div>
    </>
  )
}

export default Footer
