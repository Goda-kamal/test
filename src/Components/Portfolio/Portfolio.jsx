import React, { useState } from 'react'
import Heading from '../Heading/Heading'
const images = Object.values(import.meta.glob("../../assets/images/*.{png,jpg}",{ as:"url", eager: true }))
function Portfolio() {
  console.log(images);
  const [isModelOpen , setModelOpen]=useState(false)
  const [imageSrc , setimageSrc]=useState("")
  return (
    <>
    <Heading  text={'portfolio component'}></Heading>
    <div className="row ">

    {images.map((Image,index) => <div key={index} className='sm:w-full md:w-1/2 lg:w-1/3 p-5  '>
    <div className="relative cursor-pointer group">
    < img className='w-full rounded-md' src = {Image} alt='images' 
    onClick={(e)=>{
      setimageSrc(e.target.getAttribute('src'))
      
      
      setModelOpen(true)
    }}/>

    </div>
    </div>)}


    </div>
   
   
   
   
    {isModelOpen && 
    <div className='inset-0 z-30 fixed  center'>
      <div className=' bg-sky-800 absolute w-full h-full opacity-60' 
      onClick={()=>{

      setModelOpen(false)
    }}></div>
      <img src={imageSrc} className='w-5/12 z-50 relative' alt="imageSrc" />
      </div>}
    </>
  )
}

export default Portfolio
