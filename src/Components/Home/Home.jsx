import React from 'react'
import Heading from '../Heading/Heading'
import avatar from '../../assets/images/avataaars.svg'
function Home() {
  return (
    <>
    <img src={avatar} className='w-1/5 mx-auto pt-4' alt="aa" />
    <Heading text={'start framework'}></Heading>
    <p className='text-white pt-5 '>Graphic Artist - Web Designer - Illustrator</p>
    </>
  )
}

export default Home
