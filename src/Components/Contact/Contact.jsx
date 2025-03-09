import React, { useState } from 'react'
import Heading from '../Heading/Heading'

function Contact() {
  const[data,setdata] = useState()
  const[age,setage] = useState()
  const[emailInput,setemail] = useState()
  const[Password,setPassword] = useState()
  return (
    <>
    <div className='container'>
    <Heading text={'contact section'}></Heading>
    <form action="" className='w-2/3 mx-auto p-5 text-start'>
      <div className="overflow-hidden">
        <label htmlFor="text" className={` text-[#1ABC9C] ${data == null ||data == "" ?"translate-y-full" : "translate-y-0" } transition-all duration-300  block`}>userName</label>
      </div>
      <input type="text" placeholder='userName' onInput={(e)=>{setdata(e.target.value);
      }} className='w-full relative border-b  p-3 rounded-md focus:outline-none'/>
      
      
      <div className="overflow-hidden">
        <label htmlFor="number" className={` text-[#1ABC9C] ${ age == null ||age == "" ?"translate-y-full" : "translate-y-0" } transition-all duration-300  block`}>userAge</label>
      </div>
      <input type="number" placeholder='userAge' onInput={(e)=>{setage(e.target.value);
      }} className='w-full relative border-b  p-3 rounded-md focus:outline-none'/>
      
      
      <div className="overflow-hidden">
        <label htmlFor="email" className={` text-[#1ABC9C] ${emailInput == null ||emailInput == "" ?"translate-y-full" : "translate-y-0" } transition-all duration-300  block`}>userEmail</label>
      </div>
      <input type="email" placeholder='userEmail' onInput={(e)=>{setemail(e.target.value);
      }} className='w-full relative border-b  p-3 rounded-md focus:outline-none'/>
      
      
      <div className="overflow-hidden">
        <label htmlFor="" className={` text-[#1ABC9C] ${Password == null ||Password == "" ?"translate-y-full" : "translate-y-0" } transition-all duration-300  block`}>userPassword</label>
      </div>
      <input type="password" placeholder='userPassword' onInput={(e)=>{setPassword(e.target.value);
      }} className='w-full relative border-b  p-3 rounded-md focus:outline-none'/>
      
      





    </form>
    </div>
    </>
  )
}

export default Contact
